import React from 'react'
import {useState,useEffect} from 'react'
import Card from "../components/Card"
import { getPopularMovies,searchMovies } from '../services/api'
import "../css/Home.css"

const Home = () => {

    const [searchQuery,setSearchQuery]=useState("")
    const [movies,setMovie]=useState([])
    const [error,setError]=useState(null)
    const [load,setLoad]=useState(true)

    useEffect(()=>{
     const loadPopularMovies=async()=>{
       try{
         const popularMovies=await getPopularMovies()
        setMovie(popularMovies)
       }catch(err){
        console.log(err)
        setError("failed to load movies")
       }finally{
        setLoad(false)
       }
     }
     loadPopularMovies()
    },[])

   
    
    const handleSearch=async (e)=>{
    e.preventDefault()
    if(!searchQuery) return
    if(load) return
    try{
        const searchResult=await (searchMovies(searchQuery))
        setMovie(searchResult)
        setError(null)
    }
    catch(err){
     console.log(err)
     setError("Failed to search movie")
    }
    finally{
        setLoad(false)
    }
    }
  return (
    <div className="home">

         <form onSubmit={handleSearch} className="search-form">
            <input  type="text" placeholder="Search for movie" className="search-input"
            value={searchQuery}
            onChange={(e)=>{
                setSearchQuery(e.target.value)
            }}
            />
            <button type="submit" className="search-button">Search</button>
         </form>

         {error && <div className='error-message'>{error}</div>}
         

       {load ? <div className='loading'>Loading.....</div>:  <div className="movies-grid">

         {
            movies.map((movie )=>

        movie.title.toLowerCase().startsWith(searchQuery) && <Card movie={movie } key={movie.id}/>
            )
         }
    </div>}

    </div>
  )
}

export default Home