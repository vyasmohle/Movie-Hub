import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYWFlZmQ5NWEzMWIyNTY2NzdkNzgwMjI0Y2VlMzZkZiIsIm5iZiI6MTcyNzQ1ODI4MC42MTEwNTgsInN1YiI6IjY2ZjZkNGY4YmUzZjFjYWI0ZDcwY2Y5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WjOdoBJZP6yUjiO9ThSQu_UksafyrDoCJFX2Q_9SQ5w'
      }
})


export default instance;