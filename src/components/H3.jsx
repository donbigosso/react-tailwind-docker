export default function H3({ id, children }) {
  return (
    <h3 className="text-amber-400 text-xl font-semibold mt-2" id={id}>
      {children}
    </h3>
  );
}
