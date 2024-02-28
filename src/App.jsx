import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './utils/getRandomFromArray'
import PhrasesCard from './component/PhrasesCard'
import Button from './component/Button'
import arrPhotos from './utils/photos.json'

function App() {

  const initialValue = getRandomFromArr(phrases)
  const initialPhoto = getRandomFromArr(arrPhotos) 

  const [phraseRandom, setPhraseRandom] = useState
  (initialValue)
  const [photoRandom, setPhotoRandom] = useState(initialPhoto)

  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`
  }
  

  return (
   <div className='app' style={objStyle}>
   <h1 className='app__title'>Galleta de la fortuna</h1>
   <div className='app__card'>
   <PhrasesCard phraseRandom={phraseRandom}/>
   <Button
   setPhraseRandom={setPhraseRandom}
   setPhotoRandom={setPhotoRandom}
   />
      </div>
    </div>

  )
}

export default App
