import axios from "../../utils/axios";
import { loadpeopleDetail } from "../reducers/PeopleSlice";

export const asyncLoadperson =  (id) => async (dispatch, getState)=>{

    try {
        const detail = await axios.get(`/person/${id}`);
        const externalIds = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits  = await axios.get(`/person/${id}/combined_credits`);
        const tvCredits  = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits  = await axios.get(`/person/${id}/movie_credits`);


        
        let printData = {
            detail: detail.data,
            externalIds: externalIds.data, 
            combinedCredits: combinedCredits.data,
            tvCredits: tvCredits.data,
            movieCredits: movieCredits.data,

            
        }
        dispatch(loadpeopleDetail(printData));
        console.log(printData);
    } catch (error) {
        
    }
}