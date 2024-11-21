



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncLoadperson } from '../store/actions/peopleActions';
import { removepeopleDetail } from '../store/reducers/PeopleSlice';
import Loading from './Loading';
import HorizontalCards from './pertials/HorizontalCards';
import DrpoDown from './pertials/DrpoDown';


function PeopleDetail() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.people);
  const [category, setCategory] =  useState('movie');

  useEffect(() => {
    dispatch(asyncLoadperson(id));
    return () => {
      dispatch(removepeopleDetail());
    };
  }, [id]);

  return info ? (
    <div className='px-[5%] w-screen h-full'>
      {/* part:1 navigation */}
      <nav className='w-full h-[10vh] flex gap-10 items-center text-xl text-zinc-100'>
        <Link>
          <i
            onClick={() => navigate(-1)}
            className='hover:text-[#8358fc] text-zinc-300 text-xl mr-3 ri-arrow-left-line'
          ></i>
        </Link>
      </nav>

      <div className='flex w-full h-full'>
        <div className='w-[20%] h-[20%]'>
          <img
            className='w-full h-[50vh] rounded shadow-[8px_20px_38px_1px_rgba(0,0,0,.5)] object-cover'
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=''
          />

          <hr className='mt-5' />

          {/* detail links */}
          <div className='text-white flex gap-5 text-xl mt-3'>
            <a
              target='_blank'
              href={`https://www.wikidata.org/wiki/${info.externalIds.wikidata_id}`}
            >
              <i className='hover:text-[#8358fc] ri-earth-fill'></i>
            </a>

            <a
              target='_blank'
              href={`https://www.facebook.com/${info.externalIds.facebook_id}`}
            >
              <i className='hover:text-[#8358fc] ri-facebook-circle-fill'></i>
            </a>

            <a
              target='_blank'
              href={`https://www.instagram.com/${info.externalIds.instagram_id}`}
            >
              <i className='hover:text-[#8358fc] ri-instagram-fill'></i>
            </a>

            <a
              target='_blank'
              href={`https://www.twitter.com/${info.externalIds.twitter_id}`}
            >
              <i className='hover:text-[#8358fc] ri-twitter-x-fill'></i>
            </a>
          </div>

          {/* person informations */}
          <h1 className='text-2xl font-semibold text-zinc-400 my-3'>Person info</h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Known for</h1>
          <h1 className='text-zinc-400'>{info.detail.known_for_department}</h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Popularity</h1>
          <h1 className='text-zinc-400'>{info.detail.popularity}</h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Gender</h1>
          <h1 className='text-zinc-400'>{info.detail.gender === 2 ? 'Male' : 'Female'}</h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Birthday</h1>
          <h1 className='text-zinc-400'>{info.detail.birthday}</h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Deathday</h1>
          <h1 className='text-zinc-400'>
            {info.detail.deathday ? info.detail.deathday : 'still alive'}
          </h1>

          <h1 className='text-md font-semibold text-zinc-400 mt-2'>Place of Birth</h1>
          <h1 className='text-zinc-400'>{info.detail.place_of_birth}</h1>
        </div>

        <div className='w-[80%] text-white ml-10'>
          <h1 className='text-6xl font-black text-zinc-400 my-3'>{info.detail.name}</h1>

          <h1 className='text-lg font-bold text-zinc-300 mt-5'>Biography</h1>
          <p className='mt-3 text-zinc-400'>{info.detail.biography}</p>

          <h1 className='text-lg font-bold text-zinc-300 mt-5'>Known for</h1>
          <div className='w-full h-[40vh] overflow-x-auto'>
            <HorizontalCards trendingData={info.combinedCredits.cast} />
          </div>

          <div className='w-full flex justify-between mt-10' >
          <h1 className='text-lg font-bold text-zinc-300 mt-5'>
            Acting
          </h1>
          <DrpoDown title='category' options={['tv', 'movie']} drop={(e)=>setCategory(e.target.value)} /> 
          </div>

          <div className=' text-zinc-400 w-full h-[70vh] overflow-x-hidden overflow-y-auto  my-5 list-disc shadow-lg shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5 rounded ' >


            {info[category + 'Credits'].cast.map((item,index)=>(

                <li key={index} className='hover:text-white p-5 hover:bg-[#19191d] rounded-md duration-300' >
                <Link to={`/${category}/detail/${item.id}`} >
                  <span className='text-zinc-200' >
                    {item.name || item.original_name || item.title || item.original_title}
                  </span>
                  <span className='block ml-6 ' >
                    {item.character && `Charater Name: ${item.character}` }
                    </span>

                </Link>
</li>


            ))}

           
          </div>


        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PeopleDetail;
