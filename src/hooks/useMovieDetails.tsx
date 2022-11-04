
import React, {useState,useEffect} from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditDetailsInterface';




interface MovieDetails{
    isLoading:boolean,
    movieFull?:MovieFull,
    cast:Cast[],
}

const initialState:MovieDetails={ isLoading:true, movieFull:undefined,cast:[]}

export const useMovieDetails = (movieId:number) => {

   


 const [movieDetailsState,setMovieDetailState]=useState<MovieDetails>(initialState);

  
  const getMovieDetails= async()=> {
    try {

        const movieDetailPromise= movieDB(`/${movieId}`)
        const castPromise= movieDB(`/${movieId}/credits`)

        const [movieDetailResp,castPromiseResp]=await Promise.all([movieDetailPromise,castPromise]);

        setMovieDetailState({
       
        isLoading:false,
        movieFull:movieDetailResp,
        cast:castPromiseResp.cast

    });
        
    } catch (error) {
        console.error(error);
    }
        
         
    
 }

 useEffect(()=>{
    getMovieDetails()
 })
   
    return {
              
        ...movieDetailsState

  }
}

