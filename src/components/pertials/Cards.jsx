import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/noimg.jpg'

function Cards({data,title}) {
    // console.log(title);

    // console.log(data)

  return (
    <div className='w-full h-full flex gap-10 flex-wrap bg-zinc-800 p-8' >
       {data.map((item,index)=>(
        <Link to={`/${item.media_type || title.toLowerCase() }/detail/${item.id}`} key={index} className='text-white relative flex hover:scale-105 duration-300' >
            
            <div className='w-[30vh]  p-1 ' >
                <img className='w-full rounded shadow-[8px_20px_38px_1px_rgba(0,0,0,.5)]  object-cover' src={ item.poster_path || item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path }`:noimage} alt="" />

                <h1 className='my-3 font-semibold text-zinc-300' >
                    {
                        item.name || item.original_name || item.title || item.original_title
                    }
                </h1>

                {item.vote_average &&  <div className='text-white w-[6vh] h-[6vh] flex items-center justify-center bg-yellow-600 rounded-full font-semibold absolute bottom-[25%] right-[-8%]' >
                    *{(item.vote_average*10).toFixed()}<sup>%</sup>
                </div>}

               
            </div>
        </Link>
       ))}
    </div>
  )
}

export default Cards