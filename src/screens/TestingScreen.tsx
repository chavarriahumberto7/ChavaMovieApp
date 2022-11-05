import { View, Animated,Button } from 'react-native'
import React from 'react'
import useFade from '../hooks/useFade';








const TestingScreen = () => {

    const {opacity,fadeIn,fadeOut}=useFade();

  return (
    <View style={{
        flex:1,
        // backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
    }}>
      <Animated.View style={{
        width:180,
        height:180,
        backgroundColor:'green',
        borderWidth:5,
        borderColor:'red',
        opacity:opacity,
      }}>

      </Animated.View>

      <Button
      title='Fade out'
      onPress={fadeOut}
      />
      <Button
      title='Fade In'
      onPress={fadeIn}
      />
    </View>


  )
}

export default TestingScreen