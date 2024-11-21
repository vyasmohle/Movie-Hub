import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {

    loadMovieDetail: (state, action)=>{
        state.info = action.payload;
    },
    removeMovieDetail: (state)=>{
        state.info = null;
    }
        

  },
})

// Action creators are generated for each case reducer function
export const { loadMovieDetail, removeMovieDetail } = movieSlice.actions

export default movieSlice.reducer