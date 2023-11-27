import React from 'react'

export default function WorkComp() {
  return (
    <>
        <section className=' bg-workbg font-saira'>
          <div className='container flex flex-col gap-3 py-10 md:py-16'>
             <h1 className='text-2xl md:text-5xl px-1 font-bold text-red border-4 border-l-red border-t-0 border-r-0 border-b-0 md:px-3'>Work</h1>
        <p className='text-sm md:text-xl font-normal text-gray-700'>A Cross sectoin off my recent projects and works so please just Click on to check it.</p>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-5'>
          <a href="/"><img src={process.env.PUBLIC_URL+"./fyp.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./tesla.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./pocketcoin.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./burger.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./gold.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./eco.jpg"} alt="My-Pic" /></a>
          <a href="/"><img src={process.env.PUBLIC_URL+"./netflix.jpg"} alt="My-Pic" /></a>
         
         </div>
          </div>
       
      </section>
    </>
  )
}
