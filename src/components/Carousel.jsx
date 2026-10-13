import { useState } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % images.length)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)

  return (
    <div className="relative w-full max-w-5xl mx-auto">
     <img
  key={current}
  src={images[current]}
  alt=""
  className="w-full aspect-[8/3] object-cover rounded-xl transition-opacity duration-500"/>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-amber-400 px-3 py-2 rounded"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-amber-400 px-3 py-2 rounded"
      >
        ›
      </button>
    </div>
  )
}