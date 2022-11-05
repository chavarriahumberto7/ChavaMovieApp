
import 'react-native-gesture-handler';

import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import TestingScreen from './src/screens/TestingScreen';
import { GradientProvider } from './src/context/GradientContext';

interface Props{
  children:JSX.Element | JSX.Element[],
}

const AppStatus=({children}:any)=>{
  return(
    <GradientProvider>
    {children}
  </GradientProvider>
  )

}

const App = () => {
  return (
    <NavigationContainer>
      <AppStatus>

        <Navigation/>      
      </AppStatus>
      {/* <TestingScreen/> */}
    </NavigationContainer>
  )
}

export default App