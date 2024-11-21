import React from 'react'
import loader from '/loading1.gif'

function Loading() {
  return (
    <div className=' w-screen h-screen flex items-center justify-center bg-black' >
        <img src={loader} alt="" />
    </div>
  )
}

export default Loading