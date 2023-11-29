import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <section className='bg-footerbg bg-no-repeat bg-cover bg-btn text-gray-200 font-saira '>
 <div className='container grid gap-10 py-10 md:gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:grid lg:grid-cols-4 md:py-16 ' > 
        <div className='bg-black p-5 rounded-lg'>
            <img src={process.env.PUBLIC_URL+"./logo.png"} alt="My-Pic" className='w-[20%] sm:w-[20%]' />
            <hr className='my-3'/>
            <p className='text-sm py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius ab, iste ipsam perferendis quaerat accusantium ut debitis saepe at.</p>
        </div>
        <div className='flex flex-col gap-3 md:px-10 md:items-center '>
            <h1 className='text-lg font-medium'>Explore</h1>
            <ul className='flex flex-col gap-2'>
                <Link to="/Home" className='flex items-center text-sm hover:text-red'><IoIosArrowForward className='mr-0 text-red ' />Home</Link>
                <Link to="/Contact" className='flex items-center text-sm hover:text-red'><IoIosArrowForward className='mr-0 text-red ' />Work</L>
                <Link to="/Contact" className='flex items-center text-sm hover:text-red'><IoIosArrowForward className='mr-0 text-red ' />Portfolio</Link>
                <Link to="/About" className='flex items-center text-sm hover:text-red'><IoIosArrowForward className='mr-0 text-red ' />About</Link>
                <Link to="/Contact" className='flex items-center text-sm hover:text-red'><IoIosArrowForward className='mr-0 text-red ' />Contact</Link>
            </ul>
        </div>
        <div className='flex flex-col gap-3 md:px-10 '>
            <h1 className='text-lg font-medium'>Contact Us</h1>
            <ul className='flex flex-col gap-2'>
                <li className='flex items-center text-sm cursor-pointer'><i class="fa-solid fa-house-chimney text-red mr-2"></i> Ali Town Lahore.</li>
                <li className='flex items-center text-sm cursor-pointer'> <i class="fa-regular fa-envelope text-red mr-2"></i>basharatalidogar14@gmail.com</li>
                <li className='flex items-center text-sm cursor-pointer'> <i class="fa-solid fa-phone text-red mr-2"></i>+923036939413</li>
              
            </ul>
        </div>
        <div className='md:px-10 md:mt-5 lg:mt-0 '>
            <h1 className='text-lg font-medium'>Follow Us</h1>
            <div className='flex gap-2 md:gap-3 mt-3'>
               <div className='flex flex-row sm:flex-col gap-2'>
               <a href="https://Wa.me/923036939413" ><FaWhatsapp className='text-3xl text-white bg-green-700 rounded-full p-2' /></a>
                <a href="https://www.facebook.com/profile.php?id=100080969177729&mibextid=ZbWKwL"><FaFacebookF className='text-3xl text-white bg-blue-900 rounded-full p-2' /></a>
               
               </div>
             <div className='flex flex-row sm:flex-col gap-2'>   
             <a href="https://twitter.com/Bashara84911062?t=OpULgNmkh3QkEfe0Jq4HRQ&s=09"><FaTwitter className='text-3xl text-white bg-blue-400 rounded-full p-2' /></a>
                <a href="/"><FaGoogle className='text-3xl text-white bg-orange-500 rounded-full p-2' /></a>
                </div>
                <div className='flex flex-row sm:flex-col gap-2'><a href="https://www.instagram.com/bdking141/"><FaInstagram className='text-3xl text-white bg-purple-500 rounded-full p-2' /></a>
                <a href="https://www.linkedin.com/in/basharat-ali-0a5131208"><FaLinkedinIn className='text-3xl text-white bg-blue-600 rounded-full p-2' /></a></div>
            </div>
        </div>
      </div>
     
    </section>
    <div className='bg-black'>
 <div className='container flex flex-col md:flex-row py-2 text-center  text-gray-200'>
        
        <div className='text-xs md:text-sm font-normal cursor-pointer  px-2'>Copyright &copy; basharatalidogar14@gmail.com All Right Reversed!
        </div>
        <div className='md:ml-auto text-xs md:text-sm cursor-pointer'> Designed by B.D king</div>
      </div>
    </div>
    
     
    </>
  )
}
