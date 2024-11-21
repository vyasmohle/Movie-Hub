import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from '../NotFound';


function Trailer() {

    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes('movie') ? 'movie' :'tv';
    const ytvideo = useSelector((state=>state[category].info.videos));

    // console.log(ytvideo);

  return(
    <div className='absolute top-0 left-0  w-screen h-screen bg-[rgba(0,0,0,.9)] flex items-center justify-center ' >

           <Link>
             <i onClick={()=>navigate(-1)} className=" absolute top-[5%] right-[4%] hover:text-[#8358fc] text-zinc-300 text-2xl mr-3 ri-close-fill "></i>
            </Link>
      
             {ytvideo ? (<ReactPlayer
            controls
            height={500}
            width={1200}
            url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />): <NotFound/>}      
    </div>
  )
}

export default Trailer