export default function Section({ id, children }) {
  return (
    <section
      id={id}
      className="w-full max-w-4xl bg-amber-950/30 border border-amber-900/40 p-4 rounded-lg"
    >
      {children}
    </section>
  );
}
