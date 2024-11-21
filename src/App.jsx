import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'
import TvShows from './components/TvShows'
import People from './components/People'
import MovieDetail from './components/MovieDetail'
import TVdetail from './components/TVdetail'
import PeopleDetail from './components/PeopleDetail'
import Trailer from './components/pertials/Trailer'
import Contact from './components/Contact'
import About from './components/About'

function App() {

  return (
    <div className=' bg-[#1f1e1e] w-screen min-h-screen flex' >
      
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/trending' element={<Trending/>} ></Route>
        <Route path='/popular' element={<Popular/>} ></Route>
        <Route path='/movie' element={<Movies/>} > </Route>
        
        <Route path='/movie/detail/:id' element={<MovieDetail/>} >
            <Route path='/movie/detail/:id/trailer' element={<Trailer/>} ></Route>
        </Route>

        <Route path='/tv' element={<TvShows/>} > </Route>
        <Route path='/tv/detail/:id' element={<TVdetail/>} >
            <Route path='/tv/detail/:id/trailer' element={<Trailer/>} ></Route>
        </Route>

        <Route path='/people' element={<People/>} ></Route>
        <Route path='/people/detail/:id' element={<PeopleDetail/>} ></Route>

        <Route path='/aboutEndator' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>

      </Routes>
    </div>
  )
}

export default App