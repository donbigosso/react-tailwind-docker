import TileBase from './TileBase.jsx';
export default function NewImageTile({ href, title, src, children }) {
  return (
    <TileBase
      href={href}
      title={title}
      placeholder={
        <img src={src} alt={title} className="h-full w-full object-contain" />
      }
    >
      {children}
    </TileBase>
  );
}
