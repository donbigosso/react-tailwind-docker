export default function ImageMiniature({ src, alt = '', onClick, setisImageModalOpen, setimgModalSrc, setModalCaption, modalCaption, children }) {
const clickFunction = () => {
  const fullImg = src.replace('_sm', '') // remove _sm from filename to get full size image name
  setimgModalSrc(fullImg)
  setisImageModalOpen(true)
  setModalCaption(modalCaption) 

}
  return (

    <div>
      <img src={src} alt={alt} onClick={clickFunction} className="float-left mr-2 w-72 md:w-48 rounded-sm cursor-pointer" />
      {children}
   
    </div>
  )
}