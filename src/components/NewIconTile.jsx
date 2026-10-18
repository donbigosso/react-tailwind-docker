import TileBase from './TileBase.jsx';
export default function NewIconTile({ href, title, Icon, children }) {
  return (
    <TileBase
      href={href}
      title={title}
      placeholder={<Icon className="h-full w-full text-amber-400" />}
    >
      {children}
    </TileBase>
  );
}
