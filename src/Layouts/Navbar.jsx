import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";

export default function Navbar() {
  let Links=[ 
    {name:"Home", link:"/Home"},
    {name:"About", link:"/About"},
    {name:"Portfolio", link:"/Portfolio"},
    {name:"Work", link:"/Work"},
    {name:"Contact", link:"/Contact"},
]
      
  
  const [Navbar,setNavbar]=useState(true);
  const [Open,setOpen]=useState(false);
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
  
  return (
    <>
    <div className={Navbar ? "active" :" navbars"}>
      <nav  className=' text-white  z-10 w-full'>
        <div className='container flex flex-col md:flex-row items-start md:items-center justify-between'>
        <div className="logo w-[25%] sm:w-[15%] md:w-[8%]"><img src={process.env.PUBLIC_URL+"./logo.png"} className='' alt="my-pic" /></div>
        <div className='text-2xl absolute md:hidden right-6 top-7' onClick={()=>{setOpen(!Open)}}>
        <ion-icon name={Open ? "close":"menu"}></ion-icon>
        </div>
         <ul className={`md:flex items-start bg-black md:bg-transparent w-full md:items-center absolute md:z-auto z-50  left-0 md:w-auto md:static top-16 transition-all duration-300 ease-in py-10 md:py-0 ${ Open ? 'top-20 opacity-100' : 'top-[-500px]'} `} > 
            {Links.map((link)=>(
              <li key={link.name} className='ml-8 mt-3 md:mt-0 text-base  md:text-lg  2xl:text-xl hover:duration-500 hover:text-red font-saira font-semibold'>
                <Link to={link.link} >{link.name}</Link></li>
            ))} 
            <a  href='https://Wa.me/923036939413' className='flex items-center   bg-red text-base xl:text-lg px-3 py-2 mt-3 md:mt-0  rounded-lg ml-8  btn font-saira font-bold'><BsWhatsapp /> Contact me</a>
            </ul>
      
        
       </div>
    </nav>
    </div>
    
       
    </>
  )
}
