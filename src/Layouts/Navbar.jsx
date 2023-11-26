import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
export default function Navbar() {
  const [Navbar,setNavbar]=useState(true);
  const [BtnNavbar,setBtnNavbar]=useState(false);
  const showButton=()=>{
    console.log("Scrolled...");
    if(window.scrollY > 490){
      setNavbar(false)
    }
    else{
      setNavbar(true)
    }
  }
  window.addEventListener('scroll',showButton);
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(e.name);
    

  }
  return (
    <>
    <div className={Navbar ? "active" :" navbars"}>
      <nav  className=' text-white  z-10 w-full'>
        <div className='container flex items-center'>
        <div className="logo"><img src={process.env.PUBLIC_URL+"./logo.png"} className='w-[30%]' alt="my-pic" /></div>
        <ul className=' gap-x-10 mx-auto hidden md:flex'> 
            <li><Link className='text-xl font-saira font-medium hover:text-red hover:animate-pulse' to="/Home">Home</Link></li>
            <li><Link className='text-xl font-saira font-medium hover:text-red hover:animate-pulse' to="/Portfolio">Portfolio</Link></li>
            <li><Link className='text-xl font-saira font-medium hover:text-red hover:animate-pulse' to="/Work">Work</Link></li>
            <li><Link className='text-xl font-saira font-medium hover:text-red hover:animate-pulse' to="/About">About</Link></li>
            <li><Link className='text-xl font-saira font-medium hover:text-red hover:animate-pulse' to="/Contact">Contact</Link></li>
        </ul>
        <a href="https://Wa.me/923036939413" className='flex items-center hidden md:flex  bg-btn py-2 px-3 text-lg font-saira font-medium rounded-md animate-bounce btn' ><BsWhatsapp className='mr-1' />Contact me</a>
        <IoMenu className=' ml-auto text-xl md:hidden' onClick={()=>{}}/>
       </div>
    </nav>
    </div>
    
       
    </>
  )
}
