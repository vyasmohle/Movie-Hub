import React from 'react'
import { Link } from 'react-router-dom'
import noimage from'/noimg.jpg'
function HorizontalCards({trendingData}) {
  // console.log(trendingData);
  return (
    <div className='w-full  p-5 ' >

        <div className='w-[100%] h-full relative  flex overflow-x-auto overflow-y-hidden' >
          { trendingData.map((item, index) => (
            <Link to={`/${item.media_type}/detail/${item.id}`} key={index} className='min-w-[14%] h-[40vh] mr-5 mb-5 bg-zinc-900 rounded-md  text-white' >
              <img className='w-full rounded h-[40%] object-cover' src={ item.backdrop_path || item.profile_path || item.poster_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path || item.poster_path}`:noimage} alt="" />
              <div className=' w-full h-[21vh] p-3 mt-3  overflow-y-auto' >
              <h1 className='  text-xl font-semibold  ' >{
                      item.name || item.original_name || item.title || item.original_title
              }</h1>
                  <p className='text-sm leading-tight my-2' >{item.overview.slice(0,60)}...<span className='text-zinc-400'>more</span></p>
       
              </div>


            </Link>
          ))}
        </div>
        
    </div>
  )
}

export default HorizontalCards