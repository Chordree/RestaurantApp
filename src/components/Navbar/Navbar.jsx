import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './navbar.css'
import { useState } from 'react';
// see if its cause of importing react..
//from react
const navItems = [{name:'home'}, {name:'about'}, {name:'menu'}, {name:'awards'}, {name: 'contact'}]

function Navbar() { 

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.goodtime} alt="sweet foods logo" />
      </div>
      <ul className="app__navbar-links">
        {
          navItems.map((item)=>(
            <li className="p__opensans" key={item.name}><a href={"#" + item.name}>{item.name}</a></li>
          ))
        }
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              {
                navItems.map((item, index)=>(
                  <li className="p__opensans" key={item.name + index}>
                    <a onClick={() => setToggleMenu(false)} href={"#" + item.name}>{item.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

