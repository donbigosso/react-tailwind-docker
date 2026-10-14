export default function ImageMiniature({ src, alt = '', onClick, children }) {
  return (
    <div>
      <img src={src} alt={alt} onClick={onClick} className="float-left mr-2 w-72 md:w-48 rounded-sm cursor-pointer" />
      {children}
    </div>
  )
}