import React from 'react'

export default function Alltextupper(props) {
  return (
    <>
       <div className='container flex flex-col h-[80vh] tex-white  justify-center'>
           <h1 className='main-heading font-saira'>{props.mainheading}</h1>
           <ul>
            <li className='flex gap-5 items-center'>
              <h3 className='text-red text-lg font-saira'>Home</h3> 
              <img src={process.env.PUBLIC_URL+"./arrow-right.svg"} alt="" /> 
              <h2 className='font-saira text-lg '>{props.subheading}</h2></li>
           </ul>
        </div>
    </>
  )
}
