/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 import CountryDetails from './screen/CountryDetails';
 import CapitalWeather from './screen/CapitalWeather';
import Homescreen from './screen/Homescreen';
const stack=createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Dashboard" component={Homescreen} />
        <stack.Screen name="Country List" component={CountryDetails} />
        <stack.Screen name="capital Weather" component={CapitalWeather} />
      </stack.Navigator>
    </NavigationContainer>
  )
}



export default App;
