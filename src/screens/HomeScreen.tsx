import { View, Text, TouchableOpacity, ActivityIndicator, Dimensions, Image, FlatList, ScrollView } from 'react-native';
import React from 'react'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'
import Carousel from 'react-native-snap-carousel';



import { useMovie } from '../hooks/useMovie';
import MoviePoster from '../components/MoviePoster';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';




const {width:windowWidth}=Dimensions.get('window');

const HomeScreen = () => {

 const navigation=useNavigation();

 const {nowPlaying,popularMovies,topRatedMovies,upcomingMovies,isLoading, urlMovie}=useMovie();

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