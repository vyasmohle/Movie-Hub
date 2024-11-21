import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null
}

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {

    loadpeopleDetail: (state, action)=>{
        state.info = action.payload;
    },
    removepeopleDetail: (state)=>{
        state.info = null;
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { loadpeopleDetail, removepeopleDetail } = peopleSlice.actions

export default peopleSlice.reducer