import { View, Text } from 'react-native'
import React from 'react'
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditDetailsInterface'
import Icon from 'react-native-vector-icons/Ionicons'
import CastingCard from './CastingCard';
import { FlatList } from 'react-native-gesture-handler';


interface Props{
    movieFull:MovieFull,
    cast: Cast[],
}



const MovieDetails = ({movieFull,cast}:Props) => {

function getCurrencyFormat(inputValue:number, code:string){
   
    }


  return (
    <View className='mt-2 ml-2'>
        {/* header and rating */}
      <View className='flex-1 flex-row'>
          
            <Icon
            name='star-outline'
            color={'gray'}
            size={20}
            
            />
          
          <Text>{movieFull.vote_average}</Text>
          <Text>
              - {movieFull.genres.map((g)=> g.name).join(', ')}
          </Text>
        </View>

        {/* Historia  y presupuesto*/}
        <View className='mt-2' >
            <Text
             className='text-lg text-gray-400 font-extrabold textº'
            >Historia</Text>
            <Text className='text-sm'>
                {movieFull.overview}
            </Text>
        </View>
        <View className='mt-2' >
            <Text
             className='text-lg text-gray-400 font-extrabold textº'
            >Presupuesto</Text>
            <Text className='text-sm'>
            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(movieFull.budget)}
            </Text>
        </View>

        {/* Casting */}

        <View className='mt-2' >
            <Text
             className='text-lg text-gray-400 font-extrabold textº'
            >Actores</Text>
             <FlatList
             data={cast}
             renderItem={({item})=> <CastingCard actor={item}/>
            }
            keyExtractor={(item)=>  item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
             
             />
        </View>

     


    </View>
  )
}

export default MovieDetails