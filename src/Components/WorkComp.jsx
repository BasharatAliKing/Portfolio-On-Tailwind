import React from 'react'
import {Link} from "react-router-dom"
export default function WorkComp() {
  return (
    <>
        <section className=' bg-workbg font-saira'>
          <div className='container flex flex-col gap-3 py-10 md:py-16'>
             <h1 className='text-2xl md:text-3xl lg:text-5xl px-1 md:px-2 font-bold text-red border-4 border-l-red border-t-0 border-r-0 border-b-0 lg:px-3'>Work</h1>
        <p className='text-sm md:text-base lg:text-xl font-normal text-gray-700'>A Cross sectoin off my recent projects and works so please just Click on to check it.</p>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
          <Link to="https://bdking-backery.netlify.app/"><img src={process.env.PUBLIC_URL+"./bakery.PNG"} alt="My-Pic" /></Link>
          <Link to="https://bdking-fyp.netlify.app/"><img src={process.env.PUBLIC_URL+"./fyp.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-tesla.netlify.app/"><img src={process.env.PUBLIC_URL+"./tesla.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-pocketcoin.netlify.app/"><img src={process.env.PUBLIC_URL+"./pocketcoin.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-zeeshanfyp.netlify.app/"><img src={process.env.PUBLIC_URL+"./burger.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-jewellery.netlify.app/"><img src={process.env.PUBLIC_URL+"./gold.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-ecowebportals.netlify.app/"><img src={process.env.PUBLIC_URL+"./eco.jpg"} alt="My-Pic" /></Link>
          <Link to="https://bdking-netflix.netlify.app/"><img src={process.env.PUBLIC_URL+"./netflix.jpg"} alt="My-Pic" /></Link>
         
         </div>
          </div>
       
      </section>
    </>
  )
}
