import { View, Text, StyleSheet } from 'react-native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


interface Props{
    children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({children}:Props) => {
  return (
    <View style={{
       flex:1,
    }}>
      <LinearGradient
        colors={['#084f6A','#75CEDB','white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x:0,y:0}}
        end={{x:0.5,y:0.7}}
      />
      {children}
    </View>
  )
}

export default GradientBackground