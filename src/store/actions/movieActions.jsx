import axios from "../../utils/axios";
import { removeMovieDetail } from "../reducers/MovieSlice";
import { loadMovieDetail } from "../reducers/MovieSlice";

export const asyncLoadmovie =  (id) => async (dispatch, getState)=>{

    try {
        const detail = await axios.get(`/movie/${id}`);
        const externalIds = await axios.get(`/movie/${id}/external_ids`);
        const recommendations = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
        let printData = {
            detail: detail.data,
            externalIds: externalIds.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=>t.name),
            videos: videos.data.results.find(m => m.type === 'Trailer'),
            watchProviders: watchProviders.data.results.US,
        }
        dispatch(loadMovieDetail(printData));
        console.log(printData);
    } catch (error) {
        
    }
}