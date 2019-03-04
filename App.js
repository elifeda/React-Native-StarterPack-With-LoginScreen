import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ImageBackground,Image,TextInput,TouchableOpacity} from 'react-native';

export default class App extends Component {
  render() {
    const {navigate}=this.props.navigation;
    return (
      <ImageBackground style={{resizeMode:'contain',flex:1,justifyContent:'center',alignItems:'center'}} source={require('./images/wallpaper.png')}>

        <Image source={require('./images/logo.png')} style={{marginBottom:50,resizeMode:'contain',height:150}} />
        
        <TextInput style={styles.input} placeholder="Username" />

        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" />


        <View style={{marginTop:100,marginLeft:200}}>

            <TouchableOpacity onPress={()=>navigate('Home',{navigate:navigate})} style={styles.button} >
              <Text style={{color:'white'}}>Skip</Text>
            </TouchableOpacity>

        </View>

      </ImageBackground>      
    );
  }
}

const styles = StyleSheet.create({
  input:{
      height:50,
      width:270,
      borderRadius:20,
      backgroundColor:'rgba(255,255,255,0.7)',
      paddingLeft:15,
      marginBottom:20,
      elevation:1
  },
  button:{
      backgroundColor:'rgba(0,0,0,0.7)',
      padding:10,
      borderRadius:10
  }
});
