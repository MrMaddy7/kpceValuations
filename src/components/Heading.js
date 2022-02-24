import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import './scss/heading.css'

function Heading() {
  return (
    <div className='main-heading'>
    <Navbar />
    <Hero />
    </div>
  )
}

export default Heading