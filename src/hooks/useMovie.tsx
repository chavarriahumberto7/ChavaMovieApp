
import React, { useEffect,useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie } from '../interfaces/movieInterface';


interface MovieState{
  nowPlaying:Movie[],
  popularMovies:Movie[],
  topRatedMovies:Movie[],
  upcomingMovies:Movie[],
  isLoading:boolean,
  
}

const initialState={
  nowPlaying:[],
  popularMovies:[],
  topRatedMovies:[],
  upcomingMovies:[],
  isLoading:true,

}

export const useMovie = () => {

  
  const [movieState, setMovieState] = useState<MovieState>(initialState);
  


  const getMovies= async()=>{

    try {
      const nowPlayingPromise=movieDB('/now_playing');
      const PopularPromise=movieDB('/popular');
      const topRatedMovies=movieDB('/top_rated');
      const upcomingMovies=movieDB('/upcoming');
      
      const  responses=  await Promise.all(
        [nowPlayingPromise,
          PopularPromise,
          topRatedMovies,
          upcomingMovies,
        ]);

      setMovieState({
        nowPlaying:responses[0]?.results,
        popularMovies:responses[1]?.results,
        topRatedMovies:responses[2]?.results,
        upcomingMovies:responses[3]?.results,
        isLoading:false,
      })


        
    } catch (error) {

      console.log(error)
      
    }
    
     
   

  }

 

  const urlMovie=(path:string)=>{
    return `https://image.tmdb.org/t/p/w500${path}`
  }
   
  useEffect(()=>{
        
 getMovies();


    },[])


  return {
    ...movieState,
    urlMovie,
  }
}

