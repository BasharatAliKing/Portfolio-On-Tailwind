import React from 'react'

export default function AboutComp() {
  return (
    <>
      <section className='container flex  flex-col gap-9 py-10 md:py-16 font-saira'>
        <h1 className='text-2xl md:text-5xl px-1 font-bold text-red border-4 border-l-red border-t-0 border-r-0 border-b-0 md:px-3'>About Me</h1>
      <div className='flex flex-col md:flex-row '>
      <div className='text-sm md:w-1/2  md:text-xl font-normal text-gray-700'>
       Hey, I Am Basharat Ali, I am Web Developer from LHR. Pakistan. I create custom websites to help businesses do better Online. I am a Full Stack Web Developer. I know how to work with HTML,HTML5, CSS, CSS3,BootStrap,Tailwind CSS, Javascript, Advance JavaScript,NodeJs,ExpressJs,MongoDB and I also Work on ReactJs . I have already built projects using HTML CSS and javascript. If you need a front-end web developer feel free to contact me. I Can do your work as you want. And if you need a React js developer then you can contact me i make do this at a good budget. If you want to visit my Gig then the link is given below at Contact session. <span className='text-red'>Thanks.... to you</span>
       </div>
       <div className='md:w-1/2 flex justify-center mt-5 md:mt-0 '><img src={process.env.PUBLIC_URL + "./me.jpg"} className='border-8 rounded-tl-3xl rounded-br-3xl border-red w-[70%] md:w-[40%]' alt="my-pic" /></div>
      
      </div>
      <h2 className='text-xl md:w-1/2 font-medium md:text-3xl text-btn'>Here i will discuss some web development processes.</h2>
      <div className='grid grid-cols-3 md:grid-cols-9 '>
        <div className="text-gray-700 font-semibold text-base md:text-xl after:content-['*'] after:ml-0.5 after:text-red-500  ">Concept</div>
        <div className="text-gray-700 font-semibold text-base md:text-xl after:content-['*'] after:ml-0.5 after:text-red-500  ">Design</div>
        <div className="text-gray-700 font-semibold text-base md:text-xl after:content-['*'] after:ml-0.5 after:text-red-500  ">Coding</div>
        <div className="text-gray-700 font-semibold text-base md:text-xl after:content-['*'] after:ml-0.5 after:text-red-500  ">Testing</div>
        <div className="text-gray-700 font-semibold text-base md:text-xl after:content-['*'] after:ml-0.5 after:text-red-500  ">Launching</div>
      </div>
      <h3 className='text-xl md:text-2xl font-semibold text-btn'>Tools | Work with</h3>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-12'>
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./vscode.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./html.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./css.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./js.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./bootstrap.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./tailwind.png"} alt="" />
         <img className='w-16 h-16'  src={process.env.PUBLIC_URL+"./nodejs.png"} alt="" />
         <img className=''  src={process.env.PUBLIC_URL+"./mongodb.png"} alt="" />
      </div>
      </section>
    </>
  )
}
