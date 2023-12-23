SubHeading

import { SubHeading } from '../compExports'
import './Newsletter.css'



function Newsletter() {
  

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title={'Newsletter'}/>
        <h1 className='headtext__cormorant'>
          Subscribe to our Newsletter
        </h1>
        <p className='p__opensans'>
          Subsscribe now so you won't miss the latest updates
        </p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Eneter your Email address' />
        <button className='custom__button'> Subscribe </button>
      </div>
    </div>
  )
}

export default Newsletter