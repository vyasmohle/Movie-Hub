import React from 'react'
import axios from '../utils/axios'
import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topnav from './pertials/Topnav';
import Cards from './pertials/Cards';
import Loading from './Loading';

function People() {

    document.title = 'Endator | People';


    const navigate = useNavigate();
    const [category, setCategory] = useState('popular');
    const [person, setPerson] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);



    const getMovies = async ()=>{
        try {
            const {data} = await axios.get(`/person/${category}?page=${page}`);
            //   console.log(data);
            if(data.results.length > 0){
                setPerson((prevData)=>[...prevData, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false);
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const refreshHandler =  ()=>{
        if(person.length === 0){   
            getMovies();
        }else{
            setPage(1);
            setPerson([]);
            getMovies();  // refresh person data after going back to home page
        }
    }

    useEffect(()=>{
       refreshHandler(); 
    },[category])



  return person.length > 0 ? (
    <div className='w-full h-screen ' >
        <div className='w-full h-[10vh] px-5 flex items-center justify-between  '  >
            <div className='flex items-center' >
            <i onClick={()=>navigate(-1)} className="hover:text-[#8358fc] text-zinc-300 text-xl mr-3 ri-arrow-left-line"></i>
            <h1 className='text-2xl text-zinc-300 font-semibold mr-24' >People  </h1>
            </div>
            <div className=' w-[78%] flex items-center justify-between ' >
            <Topnav/>
            <div className='w-5' ></div>
            </div>

        </div>

        <InfiniteScroll loader={<h1 className='text-white' >Loading...</h1>} dataLength={person.length} next={getMovies}  hasMore={hasMore} >
            
        <Cards data={person} title='people' />

        </InfiniteScroll>
        
    </div>
  ): <Loading/>
}

export default People