import React from 'react'
import { Link } from 'react-router-dom';

function Header({wallppr}) {
    // console.log(wallppr);
  return (
    <div style={{background:` linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${wallppr.backdrop_path || wallppr.profile_path})`,
    backgroundPosition: 'top-[5%]',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat'}} 
    
    className='w-[99%] mx-auto rounded-lg  h-[53vh] text-white flex flex-col justify-end items-start p-14 ' >

        <h1 className=' w-[70%] text-5xl font-bold ' >{
            wallppr.name || wallppr.original_name || wallppr.title || wallppr.original_title
        }</h1>
        <p className='w-[60%] my-5' >{wallppr.overview.slice(0,200)}...<Link  to={`/${wallppr.media_type}/detail/${wallppr.id}`}className='text-blue-400' >more</Link></p>
        <p className='flex gap-3' >
        <i className="text-yellow-600 ri-megaphone-fill"></i> {wallppr.release_date || 'no information available'}
        <i className="text-yellow-600 ml-5 ri-album-fill"></i> {wallppr.media_type.toUpperCase()}
        </p>
        <Link to={`/${wallppr.media_type}/detail/${wallppr.id}/trailer`} className='mt-5 px-5 py-2 rounded-md bg-[#8135bb] font-semibold ' >Watch Trailer</Link>

        
    </div>
  )
}

export default Header