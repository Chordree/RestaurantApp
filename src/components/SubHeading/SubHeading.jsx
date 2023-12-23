
import {images} from  "../../constants/exports"

// import images from '../../constants/images'
// the above would also work since all images were exported there

import './subHeading.css'


function SubHeading({title}) {
  

  return (
    <div style={{marginBottom:'1rem'}}>
     <p className="p__cormorant"> {title}</p> 
      <img src={images.spoon} alt="spoon image" className="spoon__image" />
    </div>
  )
}

export default SubHeading