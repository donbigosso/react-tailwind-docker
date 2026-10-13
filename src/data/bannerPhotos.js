import photo1 from '../images/banner/szkola.jpg'
import photo2 from '../images/banner/tescie.jpg'
import photo3 from '../images/banner/wisla.jpg'
import photo4 from '../images/banner/geligeli.jpg'
import photo5 from '../images/banner/lacrose.jpg'
import photo6 from '../images/banner/rzepiary.jpg'
import photo7 from '../images/banner/staryrynek.jpg'
// add the rest of your imports here

const allPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7 /* , ... up to 20 */]

function pickRandom(arr, count) {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy.slice(0, count)
}

export function getRandomBannerPhotos(count = 5) {
  return pickRandom(allPhotos, count)
}