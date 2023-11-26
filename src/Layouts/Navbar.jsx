import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import Button from '../Components/Button';
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
        <div className='container flex flex-col md:flex-row items-center justify-between'>
        <div className="logo"><img src={process.env.PUBLIC_URL+"./logo.png"} className='w-[30%]' alt="my-pic" /></div>
        <div className='text-xl absolute md:hidden right-8 top-6' onClick={()=>{setOpen(!Open)}}>
        <ion-icon name={Open ? "close":"menu"}></ion-icon>
        </div>
         <ul className={`md:flex items-start bg-yellow-400 w-full md:items-center absolute md:z-auto z-50  left-0 md:w-auto md:static top-20 ${ Open ? 'top-20 opacity-100' : 'top-[-500px]'} `} > 
            {Links.map((link)=>(
              <li key={link.name} className='ml-8 text-xl hover:duration-500 hover:text-red font-saira font-semibold'>
                <a href={link.link} >{link.name}</a></li>
            ))} 
            <Button btnname="Contact me"/>
            </ul>
      
        
       </div>
    </nav>
    </div>
    
       
    </>
  )
}
