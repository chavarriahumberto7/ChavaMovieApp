/* import axios from 'axios';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';


const movieDB=axios.create({

    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'017841198c75e0556c49ed3b77b9c242',
        language:'es-ES',
    }
});

export default movieDB; */



const movieDB = async (urlString:string) => {
  const options={
    method: 'GET',
    headers: {},
  }
 
try {
  
    const response = await fetch(`https://api.themoviedb.org/3/movie${urlString}?api_key=017841198c75e0556c49ed3b77b9c242&language=es-ES`, options);
  
    if (response.ok) {
      const result= await response.json();
      
      return result;
    }
  } catch (err) {
    console.error(err);
  }
} 

export default movieDB
