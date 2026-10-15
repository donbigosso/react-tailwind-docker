export default function ImageMiniature({ src, alt = '', onClick, setIsModalOpen, setModalSrc, targetImage, setModalCaption, modalCaption, children }) {
const clickFunction = () => {
  setModalSrc(targetImage)
  setIsModalOpen(true)
  setModalCaption(modalCaption)

}
  return (

    <div>
      <img src={src} alt={alt} onClick={clickFunction} className="float-left mr-2 w-72 md:w-48 rounded-sm cursor-pointer" />
      {children}
   
    </div>
  )
}