import React from 'react'

export default function button(props) {
  return (
    <>
      <button className='btn px-3 py-2 rounded-lg text-lg font-semibold font-saira md:ml-8'>{props.btnname}</button>
    </>
  )
}
