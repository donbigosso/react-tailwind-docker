export default function TimeComponent({ flag, time }) {
  if (time) {
    return (
      <div className="w-1/2 sm:w-auto">
        {flag} {time}
      </div>
    );
  }
}
