import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';


function App() {

  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />

    </>
  )
}

export default App
