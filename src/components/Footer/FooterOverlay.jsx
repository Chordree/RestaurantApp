import './FooterOverlay.css'
// notice that case sensitivity didn't affect the names of the css fileName import

function FooterOverlay() {
  
  return (
    <div className='app__footerOverlay'>
      <div className='app__footerOverlay-blank'/>
      <div className='app__footerOverlay-img app__bg'/>
    </div>
  )
}

export default FooterOverlay

// see if this footerOverlay section is really necessary