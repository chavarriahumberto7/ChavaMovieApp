import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import React, {useEffect} from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import {useMovieDetails} from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from '../navigation/Navigation';
import { useNavigation } from '@react-navigation/native';





interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};
const screenHeight=Dimensions.get('screen').height



const DetailScreen = ({route} :Props) => {


  

  const movie=route.params;

  const urlMovie=(path:string)=>{
    return `https://image.tmdb.org/t/p/w500${path}`
  }


  const nativation=useNavigation()
  const movieDetails=useMovieDetails(movie.id);
  
  
  

  return (
    <ScrollView >

      <TouchableOpacity style={{
        position:'absolute',
        zIndex:999,
        margin:10,
      }}
      onPress={()=>nativation.goBack()}
      >
        <Icon
        name='arrow-back-circle-outline'
        size={40}
        color={'white'}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
       <Image
      source={{
        uri:urlMovie(movie.backdrop_path)
      }}
      style={[styles.posterImage]}
      
      /> 
    </View>

    {/* Section information */}
    <View className='m-2'>
        <View >
          <Text className='text-gray-400 text-sm'>{movie.original_title}</Text>
          <Text className='font-bold text-gray-400 text-lg'>{movie.title}</Text>
        </View>

        

             

    </View>

    {movieDetails.isLoading
            ?<ActivityIndicator size={40} color={'gray'}/>
            :<MovieDetails movieFull={movieDetails.movieFull!} cast={movieDetails.cast}/>
          }

    </ScrollView>
  )
}

const styles=StyleSheet.create({
  imageContainer:{
    // backgroundColor:'red',
    width:'100%',
    height:screenHeight*0.7,
     shadowColor:'#000',
   shadowOpacity:0.24,
    padding:1,
    
    shadowOffset:{
      width:0,
      height:10,
    },

    elevation:7, 
    borderBottomEndRadius:25,
    borderTopStartRadius:25,
    overflow:'hidden',
    
   
    

  },
  posterImage:{
    width:'100%',
    height:'100%',
    
   
  },

}
)




export default DetailScreen