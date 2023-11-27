import React from 'react'

export default function button(props) {
  return (
    <>
      <button className='btn px-3 py-2 mt-3 md:mt-0 rounded-lg text-lg font-semibold font-saira ml-8'>{props.btnname}</button>
    </>
  )
}
