// import data from "../../constants/data"
// import images from "../../constants/images"
import {data, images} from  '../../constants/exports'
import { MenuItem, SubHeading } from '../../components/compExports'
import './menu.css'

function Menu() {
  

  return (
    <div className='app__fullMenu flex__center section__padding' id='menu'>
      <div className='app__fullMenu'>
        <SubHeading title={'Menu that soothes your Palatte'}/>
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__fullMenu-menu'>
        <div className='app__fullMenu-menu_wine flex__center'>
          <p className='app__fullMenu-menu_heading'>Wine & Beer</p>
          <div className='app__fullMenu-menu_items'>
            {
              data.wines.map((wine, index) => (
                <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))
            }
          </div>
        </div>
        <div className="app__fullMenu-menu_img">
          <img src={images.menu} alt="fruit juice mixer" />
        </div>

        <div className="app__fullMenu-menu_cocktails  flex__center">
          <p className="app__fullMenu-menu_heading">Cocktails</p>
          <div className="app__fullMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>  
        </div> 

      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">View More</button>
      </div>

    </div>
  )
}

export default Menu



