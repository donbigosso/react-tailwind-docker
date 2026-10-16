import { XMarkIcon } from '@heroicons/react/24/outline'

export default function ImageModal({ isOpen, onClose, src, alt = '', caption }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-amber-900/50 bg-amber-950/50 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-black/70 p-2 text-amber-400 hover:bg-black/90 hover:text-amber-300"
          aria-label="Zamknij"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain my-2 "
        />

        {caption && (
          <div className="border-t border-amber-900/80  bg-amber-950/50 px-4 py-3 text-center text-amber-100">
            {caption}
          </div>
        )}
      </div>
    </div>
  )
}
