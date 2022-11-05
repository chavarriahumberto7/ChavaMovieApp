import { View, Text } from 'react-native'
import React from 'react'
import ImageColors from 'react-native-image-colors';

const getImageColors= async(uri:string)=>{
    
    try {
      const result = await ImageColors.getColors(uri,{});
       

        if(result.platform==='android'){

            const {average,lightMuted}=result;
            const primary=average;
            const secondary=lightMuted;
            
            
            

            return[
              primary,
              secondary
            ]
                
            
        }
        
    } catch (error) {
      console.log('HError: ',error);
    }
  }

export default getImageColors;