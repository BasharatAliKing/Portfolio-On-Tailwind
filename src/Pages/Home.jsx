import React from 'react';
import WorkComp from '../Components/WorkComp';
import { TypeAnimation } from 'react-type-animation';
import AboutComp from '../Components/AboutComp';
import resume from "../BasharatAli-CV.pdf";
import ContactComp from '../Components/ContactComp';
import Footer from '../Layouts/Footer';

export default function Home() {
  return (
    <>
      <div className=' bg-bgimgall  bg-no-repeat bg-cover top-0'>
        <div className='container flex flex-col items-center py-10 justify-center w-full md:flex-row md:h-screen  '>
          <div className='flex flex-col text-white gap-y-1 mt-24 md:mt-0  md:h-auto w-screen  md:gap-y-3  px-4 md:w-1/2'>
            <h4 className='text-sm md:text-xl font-medium font-saira'>Hey, I Am</h4>
          <div className='flex flex-col items-start md:items-center sm:flex-row md:gap-2'>
            <div className='full-main '>Hey folks,</div>
          <TypeAnimation className='full-main'
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' I am Basharat Ali',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' I am UI Specialist',
                1000,
                ' React Developer',
                1000,

              ]}
              // wrapper="span"
              speed={10}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
            <p className='text-sm md:text-lg font-medium font-saira'>Website Developer</p>
            <div className="flex flex-col mt-5 md:flex-row gap-2 md:mt-7 items-start md:items-center">
              <a href="/" className=' px-7 py-2 text-sm md:px-3 md:py-2 md:text-md btn font-saira font-bold rounded-lg uppercase'>View my Work</a>
              <a href={resume} className=' px-3 py-2 text-sm md:px-3 md:py-2 md:text-md btn font-saira font-bold rounded-lg uppercase' download="Resume" >Download resume</a>
            </div>

          </div>
          <div className=' md:w-1/2 md:h-auto flex justify-center mt-10 md:mt-0'><img src={process.env.PUBLIC_URL + "./user.jpg"} className='border-8 rounded-tl-3xl rounded-br-3xl border-red w-[70%] md:w-[50%]' width="50%" alt="my-pic" /></div>
        </div>
      </div>
      {/* Work section start here */}
      <WorkComp />
      {/* About section start here */}
      <AboutComp />
      {/* Contact section start here */}
      <ContactComp/>
      {/* Footer section here */}
     <div className="container">
      <hr className='text-gray-700' />
     </div>
      <Footer/>
    </>
  )
}
