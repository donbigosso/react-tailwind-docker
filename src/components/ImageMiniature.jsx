export default function ImageMiniature({ src, alt = '', onClick, setisImageModalOpen, setimgModalSrc, setModalCaption, size = 'medium', float = 'left', modalCaption, children }) {
  const clickFunction = () => {
    const fullImg = src.includes('_sm') ? src.replace('_sm', '') : src; // remove _sm from filename to get full size image name if _sm is in the name
    setimgModalSrc(fullImg);
    setisImageModalOpen(true);
    setModalCaption(modalCaption);
  };
  const sizes = {
    medium: 'w-72 md:w-48',
    small: 'w-48 md:w-32',
    large: 'w-96 md:w-64',
  };
  const floats = {
    left: 'float-left mr-2',
    right: 'float-right ml-2',
  };
  return (
    <div>
      <img src={src} alt={alt} onClick={clickFunction} className={`${floats[float]}  ${sizes[size]} rounded-sm cursor-pointer my-2`} />
      {children}
    </div>
  );
}
