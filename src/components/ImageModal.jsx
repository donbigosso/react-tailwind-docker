import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ImageModal({ isOpen, onClose, src, alt = '', caption }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
          aria-label="Zamknij"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[85vh] object-contain"
        />

        {caption && (
          <div className="bg-slate-950/90 px-4 py-3 text-center text-slate-100">
            {caption}
          </div>
        )}
      </div>
    </div>
  )
}
