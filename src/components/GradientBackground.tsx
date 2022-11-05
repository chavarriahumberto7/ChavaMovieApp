import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useContext,useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';



interface Props{
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}:Props) => {


  const {opacity,fadeIn,fadeOut}=useFade()

  const {colors,prevColors,setPrevMainColors} =useContext(GradientContext);


  useEffect(()=>{

    fadeIn(()=>{
      setPrevMainColors(colors);
      fadeOut();
    })

  },[colors]);

  

  return (
    <View style={{
       flex:1,
    }}>
      <LinearGradient
        colors={[prevColors.primary,prevColors.secondary,'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0,y:0}}
        end={{x:0.7,y:0.9}}
      />

      <Animated.View
      style={{
        ...StyleSheet.absoluteFillObject,opacity
      }}
      >

        <LinearGradient
          colors={[colors.primary,colors.secondary,'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x:0,y:0}}
          end={{x:0.7,y:0.9}}
        />

        
      </Animated.View>


      {children}
    </View>
  )
}

export default GradientBackground