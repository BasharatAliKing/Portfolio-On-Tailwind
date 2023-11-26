import React from 'react'
import Navbar from '../Layouts/Navbar'
import Alltextupper from '../Components/Alltextupper'
import AboutComp from "../Components/AboutComp"
import Footer from "../Layouts/Footer"
export default function About() {
  return (
    <>
      <Navbar/>
      <section className='bg-bgimgall text-white' >
       <Alltextupper mainheading="About Us" subheading="About Us"/>  
      </section>
      {/* Abouts here */}
      <AboutComp/>
      {/* Footer here */}
      <Footer/>
    </>
  )
}
