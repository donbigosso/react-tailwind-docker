import { useState, useEffect } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)

  const next = () => {
    setPrev(current)
    setCurrent((current + 1) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [current, images.length])

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* previous image (stays underneath) */}
      <img
        src={images[prev]}
        alt=""
        className="w-full aspect-[8/3] object-cover rounded-xl"
      />

      {/* current image (fades in on top) */}
      <img
        key={current}
        src={images[current]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-xl animate-[fadeIn_1.6s_ease-in-out_forwards]"
      />

      <button
        onClick={next}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-amber-400 px-3 py-2 rounded z-10"
      >
        ‹
      </button>
      <button
        onClick={() => {
          setPrev(current)
          setCurrent((current - 1 + images.length) % images.length)
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-amber-400 px-3 py-2 rounded z-10"
      >
        ›
      </button>
    </div>
  )
}