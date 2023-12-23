import { useState } from 'react'
import './App.css'
import { Navbar } from './components/compExports'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, FullMenu } from './container/exports'


function App() {
  

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <FullMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  )
}

export default App

