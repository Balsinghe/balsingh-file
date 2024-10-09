import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'
import park from './park';
import nearby from './nearby';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="park" component={park} />
      </Stack.Navigator>
      <StackNavigator>
        <Stack.Screen Options={{headershown:true}} name="nearby" component={nearby}/>

      </StackNavigator>
    </NavigationContainer>
    
  )
}

export default App

const styles = StyleSheet.create({})


