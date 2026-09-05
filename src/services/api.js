// const API_KEY='180c5544011597f2218778b1a33705db'
const API_KEY=import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL='https://api.themoviedb.org/3'

 export const getPopularMovies=async ()=>{

    const response= await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data= await response.json()
    return data.results
};

 export const searchMovies=async(query)=>{

    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY} &query=${encodeURIComponent(query)}`)
    const data=response.json()
    return data.results
};
