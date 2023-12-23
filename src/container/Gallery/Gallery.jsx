import { SubHeading } from "../../components/compExports"
import images from "../../constants/images"
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './gallery.css'
import { useRef } from "react"

const pictures = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

function Gallery() {
  const scrollRef = useRef(null)
  
  function scroll(direction){
    const {current} = scrollRef

    if (direction === 'left'){
      current.scrollLeft -= 300
    }
    else{
      current.scrollLeft += 300
    }
  }


  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title='photos from IG'/>
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p className="p__opensans" style={{ color: 'darkgrey', marginTop: '2rem' }}> see our delicate dishes well prepared yummy
            sweet, delicious and specially made for you.</p>
        <button type="button" className="custom__button">View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
            {
            pictures.map((pic, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                <img src={pic} alt= {"gallery_image " + index + 1}/>
                <BsInstagram className="gallery__image-icon" />
              </div>
            ))
            }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')}/>
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
      
    </div>
  )
}

export default Gallery

