import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/MovieSlice'
import tvReducer from './reducers/TVSlice'
import peopleReducer from './reducers/PeopleSlice'


export const store = configureStore({
  reducer: {
    movie: movieReducer, 
    tv: tvReducer,
    people: peopleReducer,  
  },
})