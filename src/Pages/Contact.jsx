import React from 'react'
import Navbar from '../Layouts/Navbar'
import Alltextupper from '../Components/Alltextupper'
import ContactComp from "../Components/ContactComp"
import Footer from '../Layouts/Footer'
export default function Contact() {
  return (
    <>
       <Navbar/>
      <section className='bg-bgimgall text-white' >
       <Alltextupper mainheading="Contact Us" subheading="Contact"/>  
      </section>
      {/* About us here */}
      <ContactComp/>
      {/* Footer here */}
      <Footer/>
    </>
  )
}
