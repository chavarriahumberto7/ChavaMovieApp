import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react'
import { Cast } from '../interfaces/creditDetailsInterface';
import { act } from 'react-test-renderer';


interface Props{
  actor:Cast,
}

const urlMovie=(path:string)=>{
  return `https://image.tmdb.org/t/p/w500${path}`
}

const CastingCard = ({actor}:Props) => {
  return (
    <View style={style.container}>
      
      {
        actor.profile_path&&<Image 
        style={style.image}
        source={
          {
            uri:urlMovie(actor.profile_path)
          }
          
        }
       
      />
      }


      <View style={style.actorInfo}>
        <Text className='text-lg text-gray-500'>{actor.name}</Text>
        <Text className='text-lg text-gray-500'>{actor.character}</Text>
      </View>
    
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    marginRight:10,
    marginBottom:20,
    padding:20,
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height: 10,

    },
    shadowOpacity:0.24,
    shadowRadius:7,

    elevation:9,

  },
  actorInfo:{
    marginLeft:10,

    
  },
  image:{
      
      width:50,
      height:50,
      borderRadius:10,
    
  },

})


export default CastingCard