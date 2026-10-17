import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', '3f3d0b7a-4a8e-48c6-95bd-0e3e27445cfc');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(
      data.success
        ? 'Wiadomość wysłana'
        : 'Wystąpił błąd podczas wysyłania wiadomości'
    );
    if (data.success) {
      event.target.reset();
    }
  };
  const inputAreaStyle =
    'w-full px-3 py-2 rounded-md bg-slate-900 border border-slate-700 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400';
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full mt-4">
      <input
        type="text"
        name="name"
        required
        className={inputAreaStyle}
        placeholder="Imię"
      />
      <input
        type="email"
        name="email"
        required
        className={inputAreaStyle}
        placeholder="Email"
      />
      <textarea
        name="message"
        required
        className={inputAreaStyle}
        placeholder="Twoja wiadomość"
      ></textarea>
      <button
        type="submit"
        className="mt-2 self-start px-5 py-2 rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium"
      >
        Wyślij
      </button>
      <p>{result}</p>
    </form>
  );
}
