export default function TileBase({ href, title, placeholder, children, size = 'lg' }) {
  const sizes = {
    lg: { text: 'text-xl', maxH: 'max-h-96' },
    md: { text: 'text-lg', maxH: 'max-h-72' },
    sm: { text: 'hidden sm:block sm:text-xs md:text-sm line-clamp-2', maxH: 'max-h-64' },
  };

  return (
    <a
      href={href}
      className={`block w-full min-w-0 rounded-xl border border-amber-900/40 bg-amber-950/30 p-4 text-center hover:border-amber-500 hover:bg-amber-950/50 transition-colors duration-500 overflow-hidden ${sizes[size].maxH}`}
    >
      <h3 className={`${sizes[size].text} font-semibold text-amber-400`}>{title}</h3>

      <div className={`mx-auto mt-3 flex aspect-square w-full items-center justify-center rounded-lg overflow-hidden `}>{placeholder}</div>

      {children}
    </a>
  );
}
