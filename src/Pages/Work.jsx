import React from 'react'
import Navbar from "../Layouts/Navbar"
import Alltextupper from '../Components/Alltextupper'
import WorkComp from "../Components/WorkComp"
import Footer from "../Layouts/Footer"
export default function Work() {
  return (
    <>
      <Navbar/>
      <section className='bg-bgimgall text-white' >
       <Alltextupper mainheading="Our Work" subheading="Work"/>  
      </section>
       {/* Work component */}
       <WorkComp/>
       {/* Footer section here */}
       <Footer/>
    </>
  )
}
