import { View, Text, FlatList } from 'react-native';
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props{
    movies:Movie[],
    title?:string,
}

const HorizontalSlider = ({movies,title=''}:Props) => {
  return (
    

    <View className='h-42 '>
            <Text className='text-gray-500 text-lg mx-2 font-bold'
            >{title}</Text>   

            
            
            <FlatList
            data={movies}
            renderItem={({item})=> {
              return(
                <MoviePoster movie={item} width={200} height={150}/>
                
              )
                }
              }
            keyExtractor={(item)=> item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

            />

    </View>


  )
}

export default HorizontalSlider