import React from 'react'
import image from '/myimg.jpg'


function Contact() {
  return (
    <>

    <div className='w-[75%] h-[85vh] m-auto text-white rounded shadow-inner bg-zinc-800' >
        <h1 className='text-5xl text-center font-bold text-zinc-400 mt-10' >Contact Us</h1>
        <div className='w-[20vh] h-[20vh] mx-auto mt-10 overflow-hidden rounded-full bg-zinc-400' >
            <img className='w-full h-full object-cover' src={image} alt="" />
        </div>

        <div className='flex items-center justify-center'>
        <p className='w-[50%] text-center text-zinc-400' >Thank you for visiting! If you have any questions, suggestions, or collaboration opportunities, feel free to reach out. I’m always happy to connect and assist you with your queries.</p>
        </div>


        <div className='flex justify-around mt-20 ' >

        <div>
        <div className='w-[15vh] h-[15vh] bg-zinc-400 rounded-2xl  ' >
        <img className='w-full h-full object-cover' src="https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png" alt="" />
         </div>
         <h1 className='text-center font-semibold text-md'>@Endator_1265</h1>
        </div>

        <div>
        <div className='w-[15vh] h-[15vh] bg-zinc-400 rounded-2xl overflow-hidden ' >
        <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.jpg" alt="" />
         </div>
         <h1 className='text-center font-semibold text-lg'>8269434702</h1>
        </div>

        <div>
        <div className='w-[15vh] h-[15vh] bg-zinc-400 rounded-2xl overflow-hidden  ' >
        <img className='w-full h-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-suyH5XUGhAbRwMVg_mUyvJre2qtxGB6qPQ&s" alt="" />
         </div>
         <h1 className='text-center font-semibold text-md'>@Endator_Team</h1>
        </div>

        </div>

        

     </div>



  
 </>
  )
}

export default Contact