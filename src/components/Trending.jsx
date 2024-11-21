import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './pertials/Topnav';
import DrpoDown from './pertials/DrpoDown';
import axios from '../utils/axios';
import Cards from './pertials/Cards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';


function Trending() {
    document.title = 'Endator | Trending';


    const navigate = useNavigate();
    const [category, setCategory] = useState('all');
    const [duration, setDuration] = useState('day');
    const [trending, setTrending] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    const getTrending = async ()=>{
        try {
            const {data} = await axios.get(`trending/${category}/${duration}?page=${page}`);
            //   console.log(data);
            if(data.results.length > 0){
                setTrending((prevData)=>[...prevData, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    // console.log(trending);
    // pages ko increase krne k liye function

    const refreshHandler =  ()=>{
        if(trending.length === 0){
            getTrending();
        }else{
            setPage(1);
            setTrending([]);
            getTrending();  // refresh trending data after going back to home page
        }
    };

    useEffect(()=>{
       refreshHandler(); 
    },[category, duration])



  return trending.length > 0 ? (
    <div className='w-full h-screen ' >
        <div className='w-full h-[10vh] px-5 flex items-center justify-between  '  >
            <div className='flex items-center' >
            <i onClick={()=>navigate(-1)} className="hover:text-[#8358fc] text-zinc-300 text-xl mr-3 ri-arrow-left-line"></i>
            <h1 className='text-2xl text-zinc-300 font-semibold mr-24' >Trending</h1>
            </div>


            <div className=' w-[78%] flex items-center justify-between ' >
            <Topnav/>
            <DrpoDown  title='Category' options={['tv','movie','all']}  drop={(e)=>setCategory(e.target.value)} value={category} />
            <div className='w-5' ></div>
            <DrpoDown  title='Duration' options={['week','day']} drop={(e)=>setDuration(e.target.value)}  value={duration} />
            </div>

        </div>

        <InfiniteScroll loader={<h1 className='text-center text-3xl font-semibold' >Loading...</h1>} dataLength={trending.length} next={getTrending}  hasMore={hasMore} >
            
        <Cards data={trending} title={category}  />

        </InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default Trending