import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions, Image, FlatList, ScrollView } from 'react-native';
import React, { useContext,useEffect } from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';

import ImageColors from 'react-native-image-colors'

import { useMovie } from '../hooks/useMovie';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import getImageColors from '../Helpers/getImageColors';
import { GradientContext } from '../context/GradientContext';





const {width:windowWidth}=Dimensions.get('window');




const HomeScreen = () => {


  

 const navigation=useNavigation();

const {setMainColors}=useContext(GradientContext);

 const {nowPlaying,popularMovies,topRatedMovies,upcomingMovies,isLoading, urlMovie}=useMovie();


 useEffect(()=>{
  if(nowPlaying.length>0){
    getIndexColor(0);
  }
},[nowPlaying]);

 const getIndexColor= async(index:number)=>{
  const uri=urlMovie(nowPlaying[index].poster_path);
  try {
    const result = await getImageColors(uri);
    const [primary='orange',secondary='yellow']=result;
    
    setMainColors({primary,secondary})

     
  } catch (error) {
    console.log('HError: ',error);
  }
}

 const {top}=useSafeAreaInsets()

 if(isLoading) {


return( 
<View className='flex-1 justify-center'
// style={{flex:1, justifyContent:'center', }}
  >
  <ActivityIndicator color={'red'} size={100}/>
  
</View>
)
}
 else return (
  <GradientBackground>
  
      <ScrollView>
      

  
      <View style={{marginTop:top+5}} className=' h-[340]'>
      
          

        {/* Carousel Principal */}
        {nowPlaying&&<Carousel
        data={nowPlaying}
        renderItem={({item})=> {return(
          <MoviePoster movie={item}/>
        )}}
        sliderWidth={windowWidth}
        sliderHeight={windowWidth}
        itemWidth={270}
        inactiveSlideOpacity={0.6}
        layout={'default'} 
        onSnapToItem= {index => getIndexColor(index)}
              
        />}
    
      </View>

      {/* Movies top rated */}
      {topRatedMovies&& <HorizontalSlider
            movies={topRatedMovies}
            title='Las mejores valoradas'
            
            />}

      {/* Popular Movies */}
      {popularMovies&& <HorizontalSlider
      movies={popularMovies}
      title='Peliculas mas populares'
      />}
      

        {/* Movies section in cinemas */}
        {upcomingMovies&& <HorizontalSlider
        movies={upcomingMovies}
        title='Proximamente'
        />}

        





    

      

      


      </ScrollView>

  </GradientBackground>
    
  )
}

export default HomeScreen