export default function H2({ children, id }) {
  return (
    <h2 className="text-amber-400 text-2xl font-semibold" id={id}>
      {children}
    </h2>
  );
}
