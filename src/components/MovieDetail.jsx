import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,  Outlet,  useLocation,  useNavigate, useParams } from 'react-router-dom'
import { asyncLoadmovie } from '../store/actions/movieActions';
import { removeMovieDetail } from '../store/reducers/MovieSlice';
import HorizontalCards from './pertials/HorizontalCards';
import Loading from './Loading';


function MovieDetail() {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();

  const {info} = useSelector(state=>state.movie);

  // console.log(info);

  useEffect(()=>{
    dispatch(asyncLoadmovie(id));
    return ()=>{
      dispatch(removeMovieDetail());  
    }
  },[id])

  return info ? (
    <div   style={{background:` linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
    backgroundPosition: 'top-[5%]',
    backgroundSize: 'cover',
    backgroundRepeat:'no-repeat'

    }}  className=' relative w-screen h-full px-2  ' >

    {/* part:1 navigation */}
      <nav className='w-full h-[10vh] flex gap-10 items-center text-xl   text-zinc-100' >
        <Link>
        <i onClick={()=>navigate(-1)} className="hover:text-[#8358fc] text-zinc-300 text-xl mr-3 ri-arrow-left-line"></i>
        </Link>
        <a target='_blank' href={info.detail.homepage}><i class="hover:text-[#8358fc] ri-external-link-line"></i></a>
        <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalIds.wikidata_id
}`}><i class="hover:text-[#8358fc]  ri-earth-fill"></i></a>
        <a target='_blank' href={`https://www.imdb.com/title/${info?.externalIds?.imdb_id}/`}  className='hover:text-[#8358fc] ' >imdb</a>




      </nav>

  <div className='flex w-full opacity-85 duration-300 rounded-lg p-5 gap-5' >
             <div className='w-[50vh] h-[60vh]  ' >
    <img className='w-full h-full rounded shadow-[8px_20px_38px_1px_rgba(0,0,0,.5)]  object-cover'    src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.   backdrop_path}`} alt="" />
            </div>

            {/* part:2 poster & details */}
            <div className='w-full h-full '  >
  
                <div className='ml-7 text-white border p-5 rounded-xl ' >


                             {/* detail name */}
                             <h1 className='text-5xl  font-black' >
                                 {info.detail.name || info.detail.original_name || info.detail.title || info.detail.original_title}
                                 <small className='text-2xl ml-3 font-semibold text-zinc-300' >({info.detail.                       release_date.split("-")[0]})</small>
                             </h1>

                            {/* detail things */}
                              <div className='flex items-center mt-5 gap-3 ' >
                                <span>
                                 {info.detail.vote_average &&  
                                 <div className='text-white w-[6vh] h-[6vh] flex items-center justify-center                          bg-yellow-600 rounded-full font-semibold ' >
                                   *{(info.detail.vote_average*10).toFixed()}<sup>%</sup>
                                 </div>}
                               </span>
                               <h1 className='text-xl font-semibold w-[50px] leading-tight '  >User Score</h1>
                               <h1>{info.detail.release_date}</h1>
                               <h1>{info.detail.genres.map(g=>g.name).join(',')}</h1>
                               <h1>{info.detail.runtime}min</h1>
                             </div>

                           {/* tagline */}
                           <h1 className='italic mt-3 text-xl' >{info.detail.tagline}</h1>

                           {/* overview */}
                           <h1 className='text-2xl font-semibold mt-3 mb-1' >Overview</h1>
                           <p className='w-[95%]' >{info.detail.overview}</p>

        {/* movie translations */}
                           <h1 className='text-2xl font-semibold mt-3 mb-1' >Movie Trenalated</h1>
                           <p className='w-[95%] mb-4' >{info.translations.join(', ')}</p>
                          
                          <Link className=' px-3 py-2  bg-violet-800 font-semibold rounded-md'  to={`${pathname}/trailer`} >
                          <i class=" mr-3 text-xl ri-play-fill"></i>
                          Play Trailer
                          </Link>

                  </div>
            </div>
  </div>
    

      {/* part:3 availability detail */}
    <div className='flex' >

       {/* part:3  available platform */}
  <div className='flex w-[40vh] items-center mb-3 mt-3' >
  <h1 className='  text-white mr-3' >Available on Platform:-</h1>
  { info.watchProviders && info.watchProviders.flatrate && info.watchProviders.flatrate.map((item, index)=>(
     <img key={index} className='rounded-md w-[6vh] h-[6vh]'
     src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`} alt="" />   
    ) )
  }

  
 
    </div>
       {/* available on rent */}
   <div className='flex ml-5 gap-3 w-[80vh] mt-3 items-center ' >
      <h1 className='text-white mr-5' >Available on rent:-</h1>
    { info.watchProviders && info.watchProviders.rent && info.watchProviders.rent.map((item,index)=>(
     <img key={index} className='rounded-md w-[6vh] h-[6vh]'
     src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`} alt="" />   
    ) )
  }
 </div>

     {/* available buy */}
  <div className='flex gap-3 w-[80vh] mt-3 items-center ' >
      <h1 className='text-white mr-5' >Available to buy:-</h1>
    { info.watchProviders && info.watchProviders.buy && info.watchProviders.buy.map((item,index)=>(
     <img key={index}
     title={item.provider_name}
      className='rounded-md w-[6vh] h-[6vh]'
     src={`https://image.tmdb.org/t/p/original/${item.logo_path}}`} alt="" />   
    ) )
  }
    </div>

    </div>


      {/* part:4  recommendations and similar stuff */}
      <hr className='mt-4' />
      <h1 className=' w-[65vh] mx-auto text-2xl mb-2 text-center mt-7 font-semibold text-white  border-b-2   ' >Recommendations & similar items</h1>
      <HorizontalCards  trendingData={info.recommendations.length > 0 ? info.recommendations: info.similar} />
   

      {/* for trailer play */}
      <Outlet/>

    </div>
  ):<Loading/>
}

export default MovieDetail