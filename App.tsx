
import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import TestingScreen from './src/screens/TestingScreen';


const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>      
      {/* <TestingScreen/> */}
    </NavigationContainer>
  )
}

export default App