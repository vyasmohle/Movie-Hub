import axios from "../../utils/axios";
import { removetvDetail } from "../reducers/TVSlice";
import { loadtvDetail } from "../reducers/TVSlice";

export const asyncLoadtv =  (id) => async (dispatch, getState)=>{

    try {
        const detail = await axios.get(`/tv/${id}`);
        const externalIds = await axios.get(`/tv/${id}/external_ids`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        let printData = {
            detail: detail.data,
            externalIds: externalIds.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=>t.name),
            videos: videos.data.results.find(m => m.type === 'Trailer'),
            watchProviders: watchProviders.data.results.US,
        }
        dispatch(loadtvDetail(printData));
        console.log(printData);
    } catch (error) {
        
    }
}