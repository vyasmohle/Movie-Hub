import React from 'react'
import axios from '../utils/axios'
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './pertials/Topnav';
import DrpoDown from './pertials/DrpoDown';
import Cards from './pertials/Cards';
import Loading from './Loading';

function TvShows() {

    document.title = 'Endator | TV shows';

    const navigate = useNavigate();
    const [category, setCategory] = useState('airing_today');
    const [shows, setShows] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);



    const getShows = async ()=>{
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);
            //   console.log(data);
            if(data.results.length > 0){
                setShows((prevData)=>[...prevData, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const refreshHandler =  ()=>{
        if(shows.length === 0){   
            getShows();
        }else{
            setPage(1);
            setShows([]);
            getShows();  // refresh shows data after going back to home page
        }
    }

    useEffect(()=>{
       refreshHandler(); 
    },[category])





  return  shows.length > 0 ? (
    <div className='w-full h-screen ' >
        <div className='w-full h-[10vh] px-5 flex items-center justify-between  '  >
            <div className='flex items-center' >
            <i onClick={()=>navigate(-1)} className="hover:text-[#8358fc] text-zinc-300 text-xl mr-3 ri-arrow-left-line"></i>
            <h1 className='text-2xl text-zinc-300 font-semibold mr-24' >TV Shows <span className='text-zinc-600 text-[20px] ' >({category})</span>  </h1>
            </div>
            <div className=' w-[78%] flex items-center justify-between ' >
            <Topnav/>
            <DrpoDown  title='Category' options={['on_the_air','popular','top_rated','airing_today']}  drop={(e)=>setCategory(e.target.value)} value={category} />
            <div className='w-5' ></div>
            </div>

        </div>

        <InfiniteScroll loader={<h1 className='text-white' >Loading...</h1>} dataLength={shows.length} next={getShows}  hasMore={hasMore} >
            
        <Cards data={shows} title='tv' />

        </InfiniteScroll>
        
    </div>
  ): <Loading/>
}



export default TvShows