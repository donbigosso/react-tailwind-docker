export default function TimeComponent({ flag, time }) {
  if (time) {
    return (
      <div className="hidden sm:block">
        {flag} <span className="text-amber-400">{time}</span>
      </div>
    );
  }
}
