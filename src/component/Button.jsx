
import getRandomFromArr from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrPhotos from '../utils/photos.json'

const Button = ({ setPhraseRandom, setPhotoRandom }) => {

  const handleChangePhrase = () => {
    setPhraseRandom(getRandomFromArr(phrases))
    setPhotoRandom(getRandomFromArr(arrPhotos))


  }
  return (
    <button className="app__btn" onClick={handleChangePhrase}>Probar Suerte</button>
  )
}

export default Button