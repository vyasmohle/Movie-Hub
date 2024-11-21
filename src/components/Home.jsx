import React, { useEffect, useState } from 'react'
import Sidenav from './pertials/Sidenav'
import Topnav from './pertials/Topnav'
import axios from '../utils/axios'
import Header from './pertials/Header'
import HorizontalCards from './pertials/HorizontalCards'
import DrpoDown from './pertials/DrpoDown'
import Loading from './Loading'

function Home() {
    document.title = 'Endator | HomePage'

    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState('all');

    const getHeaderWallpaper = async ()=>{
        try {
            const {data} = await axios.get(`trending/all/day`);
            let randomData = data.results[(Math.random()*data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log(error);
        }
    }

    const getTrending = async ()=>{
        try {
            const {data} = await axios.get(`trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTrending(); 
        // console.log(category);
        !wallpaper && getHeaderWallpaper();
    },[category])

    // console.log(wallpaper);


  return wallpaper && trending ?  (
    <>
        <Sidenav/>
        <div className='w-[80%] left-[20%] relative container min-h-full flex flex-col  overflow-y-hidden ' >
            <Topnav/>
            <Header wallppr={wallpaper} />
            <div className='p-6 text-white flex justify-between' >
            <h1 className='text-2xl font-semibold' >Trending</h1>
            <DrpoDown title='Filter' options={['tv', 'movie', 'all']} drop={(e)=>setCategory(e.target.value)} />
        </div>
            <HorizontalCards trendingData={trending}  />
        </div>
    </>
  ): <Loading/>
};

export default Home