import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimg from '/noimg.jpg'

function Topnav() {

    const [query, setQuery] = useState("");
    // console.log(query);
    const [searches, setSearches] = useState([]);
    
    const getSearch = async ()=>{
        try {
            const {data} = await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);  
        } catch (error) {
            console.error('Error fetching search results:', error);   
        }
    }

    // console.log(searches.id);

    useEffect(()=>{
        getSearch();
    },[query])

  return (
    <div className='w-[80%] m-auto h-[10vh] text-zinc-300 flex items-center relative ' >
        <i className="text-xl ri-search-2-line"></i>
        <input onChange={(e)=>setQuery(e.target.value)} value={query} className='mx-10 w-[50%] px-5 bg-zinc-800  border-none outline-none py-2 rounded-full' type="text" placeholder='Search anything' />
        {query.length > 0 && <i onClick={()=>setQuery("")} className="text-2xl   ri-close-fill"></i>}

        <div className='w-[60vh] max-h-[58vh] bg-zinc-100 absolute z-[10] top-[80%] left-[8%] mr-24 rounded-lg overflow-auto' >

                {searches.map((item,index)=>(<Link to={`/${item.media_type}/detail/${item.id}`} key={index} className='hover:bg-zinc-300 duration-300 hover:text-black text-zinc-600 w-full bg-zinc-200 flex items-center justify-start p-4 border-b-2 border-zinc-100 '>
                <img className='w[12vh] h-[12vh] rounded object-cover' src={item.backdrop_path || item.profile_path ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`: noimg} alt="" />
                <span className='ml-8' >{item.name || item.original_name || item.title || item.original_title } </span> 
                </Link>))}
            
            
            
        </div>
    </div>
  )
}

export default Topnav