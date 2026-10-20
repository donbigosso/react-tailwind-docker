export default function TileBase({ href, title, placeholder, children }) {
  return (
    <a
      href={href}
      className="block w-full rounded-xl border border-amber-900/40 bg-amber-950/30 p-4 text-center hover:border-amber-500 hover:bg-amber-950/50 transition-colors duration-500"
    >
      <h3 className="text-xl font-semibold text-amber-400">{title}</h3>

      <div className="mx-auto mt-3 flex aspect-square w-full items-center justify-center rounded-lg ">
        {placeholder}
      </div>

      {children && <p className="mt-3 text-amber-50/80 text-sm">{children}</p>}
    </a>
  );
}
