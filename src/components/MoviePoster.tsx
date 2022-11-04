import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/native';


interface Props{
    movie:Movie,
    width?:number,
    height?:number,
}



const MoviePoster = ({movie,height=330,width=248}:Props) => {

const {title,backdrop_path}=movie;

const urlMovie=(path:string)=>{
    return `https://image.tmdb.org/t/p/w500${path}`
}

const navigation=useNavigation();


  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate('DetailScreen', movie)}
    activeOpacity={0.6}
    className={`h-${height} items-center justify-center flex-1 mx-1 rounded-md`}
     style={styles.containerImage} >
        
      <Image
      source={{
        uri:urlMovie(backdrop_path)
      }}
      // className={`h-${height} w-${width} rounded-xl`}
      style={{
          height,
          width,
          borderBottomLeftRadius:15,
          borderTopRightRadius:15
      }}
      />

    </TouchableOpacity>
  )
}


export default MoviePoster

const styles=StyleSheet.create(
    {
        containerImage:{
            borderRadius:20,
            shadowColor: "#000",
            shadowOffset: {
                width: 10,
                height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 0.97,

            elevation: 5,
                    }
    }
)