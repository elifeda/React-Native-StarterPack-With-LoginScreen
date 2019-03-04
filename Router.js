import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground,Image,TextInput,TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './App';
import HomeScreen from './Home';


const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
  },{headerMode:"none"});
  
  const App = createAppContainer(MainNavigator);
  
  export default App;