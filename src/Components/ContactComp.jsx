import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ContactComp() {
  const notify = () => toast("Form Submitted!");
  const [form,setform]=useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
    description:""
  });
  return (
    <>
       <section className=''>
        <div className='contact flex flex-col md:flex-row  container pt-0  py-10 md:py-16 font-saira'>
        <div className='md:w-1/2 flex flex-col gap-5' >
          <h1 className='text-2xl px-1 md:text-5xl font-bold text-red border-4 border-l-red border-t-0 border-r-0 border-b-0 md:px-3'>Contact</h1>
          <p className='text-sm md:text-lg font-normal text-gray-700'>Got a Project in mind? Need to Collaaborate or Bounce Ideas.</p>
          <h2 className='uppercase text-md md:text-2xl font-semibold  text-btn'>Hit Up Me!</h2>
          <p className='text-sm md:text-lg font-normal text-gray-700'>Just Click On the Method Button You want to Contact Me.</p>
          <div className='flex flex-col gap-5 '>
            <a href='/' className='flex items-center text-base md:text-xl font-medium text-gray-700'> <img className='mr-2' src={process.env.PUBLIC_URL + "./gmail.png"} alt="" /> E-Mail</a>
            <a href='https://Wa.me/923036939413' className='flex items-center text-base md:text-xl font-medium text-gray-700'> <img className='mr-2' src={process.env.PUBLIC_URL + "./whatsapp.png"} alt="" /> Whatsapp</a>
            <a href='https://twitter.com/Bashara84911062?t=OpULgNmkh3QkEfe0Jq4HRQ&s=09' className='flex items-center text-base md:text-xl font-medium text-gray-700'> <img className='mr-2' src={process.env.PUBLIC_URL + "./twitter.png"} alt="" /> Twitter</a>
            <a href='https://www.facebook.com/profile.php?id=100080969177729&mibextid=ZbWKwL' className='flex items-center text-base md:text-xl font-medium text-gray-700'> <img className='mr-2' src={process.env.PUBLIC_URL + "./facebook.png"} alt="" /> Facebook</a>
            <a href='https://www.instagram.com/bdking141/' className='flex items-center text-base md:text-xl font-medium text-gray-700'> <img className='mr-2' src={process.env.PUBLIC_URL + "./instagram.png"} alt="" /> Instagram</a>
          </div>
        </div>
        <div className='flex flex-col mt-10 md:mt-0 md:w-1/2 md:mx-10 my-auto'>
            <form action="" className='shadow p-7 rounded-xl flex flex-col gap-3' >
              <h2 className='text-lg md:text-2xl text-btn font-medium'>Fill out the form and we'll be in touch ASAP.</h2>
              <div className='flex flex-col md:flex-row gap-2'>
                <input type="text" name='fname'   className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='First Name' />
                <input type="text" name='lname' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Last Name' />
              </div>
              <input type="email" name='email' className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Email Address' />
              <PhoneInput name='phone' country={'us'} />
              <textarea name="description"  className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Tell us more About your Projects..' id="" cols="30" rows="5"></textarea>
              <button className='btn p-1 text-white rounded-sm font-medium text-sm' onClick={notify} >Submit Query</button>
            </form>
        </div>
        </div>
       
      </section>
    </>
  )
}
