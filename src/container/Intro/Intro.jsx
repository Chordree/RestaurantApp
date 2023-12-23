import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { meal } from '../../constants/exports'
import { useRef, useState } from 'react'
import './intro.css'

function Intro() {
  const [playVid, setPlayVid] = useState(false)
  const vidRef = useRef()

  function playPause(){
    setPlayVid(!playVid)

    if (playVid){
      vidRef.current.pause()
    }
    else{
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video' style={{padding:'1.5rem'}} >
      <video src={meal} type='video/mp4'
        loop controls={false} muted ref={vidRef}/> 

    <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay_circle flex__center' onClick={playPause}>
          {
            playVid ? 
            <BsPauseFill color='#fff' fontSize={30}/> :
            <BsFillPlayFill color='#fff' fontSize={30}/>
          }
        </div>
    </div>
    </div>
    
  )
}

export default Intro


// remove inline padding style in div later on if not satisfactory