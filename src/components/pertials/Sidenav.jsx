import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className='w-[20%] h-full  border-r-2  fixed border-zinc-400 p-10' >
        <h1 className='text-white ' >
        <i className=" text-[#8135bb] text-2xl ri-tv-fill mr-3"></i>
            <span className='text-2xl font-bold mr-3' >Endator</span>
        </h1>

        <nav className='text-lg text-zinc-400 flex flex-col gap-2'>
            <h1 className=' mt-10 mb-5 font-semibold text-xl text-zinc-100 ' >new Feeds</h1>
            <Link to='/trending' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-fire-fill"></i>Trending</Link>
            <Link to='/popular' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-bard-fill"></i>Populer</Link>
            <Link to='movie' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-movie-2-fill"></i>Movies</Link>
            <Link to='tv' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-tv-2-fill"></i>TV Shows</Link>
            <Link to='people' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-team-fill"></i>People</Link>
        </nav>
        <hr className='border-transparent h-[1px] bg-zinc-400 mt-2' />
        <nav className='text-lg text-zinc-400 flex flex-col gap-2' >
            <h1 className=' mt-5 mb-3 font-md text-xl text-zinc-100 ' >Website Information</h1>
            <Link to='/aboutEndator' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-information-fill"></i>About Endator</Link>
            <Link  to='/contact' className=' hover:bg-[#8135bb] hover:text-white rounded-md duration-300 p-3 ' ><i className="mr-2 ri-phone-fill"></i>Contact Us</Link>
        </nav>
    </div>
  )
}


export default Sidenav