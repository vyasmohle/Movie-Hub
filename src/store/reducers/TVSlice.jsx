import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null
}

export const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {

    loadtvDetail: (state, action)=>{
        state.info = action.payload;
    },
    removetvDetail: (state)=>{
        state.info = null;
    }
    
    
  },
})

// Action creators are generated for each case reducer function
export const { loadtvDetail, removetvDetail } = tvSlice.actions

export default tvSlice.reducer