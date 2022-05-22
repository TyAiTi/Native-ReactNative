import React , { useState } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules,
  TextInput
} from 'react-native';


// import Anonymous from './view/login/anonymous'
// import Login from './view/login/login'
import Welcome from './view/welcome/welcome'
import Option from './view/login/option'

import Google from './view/login/google'
import Facebook from './view/login/facebook'



console.log(NativeModules.OpenActivity.getParams());

const HelloWorld = () => {
  const [data, setData] = useState("");
  const sendString = ( )=>{
    OpenActivity.getString(data);
  }
  var OpenActivity = NativeModules.OpenActivity;
  const openFunc = ( )=>{
      OpenActivity.open();
  }

  const moveScreen = ( nameScreen) =>{
    OpenActivity.moveScreen(nameScreen);
  }
  return (
    <View style={styles.container}>
      <Text style={{color:"black", fontSize:30}}>Screen React Native</Text>
      <TextInput
          style={styles.input}
          onChangeText={setData}
          value={data}
          placeholder="enter data"
        />
        <TouchableOpacity style = {styles.button}
         onPress = { ()=> sendString()}
       >
         <Text style = {styles.text}>Gửi String input</Text>
       </TouchableOpacity>

       <Text style = {styles.text}>String nhận được</Text>
       <TouchableOpacity style = {styles.button}
         onPress = { ()=> openFunc()}
       >
         <Text style = {styles.text}>Open Android Native</Text>
       </TouchableOpacity>

       <TouchableOpacity style = {[styles.button, { marginTop: 50}]}
         onPress={()=> moveScreen('Welcome')}
       >
         <Text style = {styles.text}>Move Screen Welcome</Text>
       </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
      fontSize: 24,
      color: "white"
     },
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: "pink"
    },
    button : {
      height:40,
      width:260,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'blue',
      
    }
  });


AppRegistry.registerComponent( 'MyReactNativeApp', () => HelloWorld );

AppRegistry.registerComponent( 'Welcome', () => Welcome );

AppRegistry.registerComponent( 'Option', () => Option );

AppRegistry.registerComponent( 'Google', () => Google );

AppRegistry.registerComponent( 'Facebook', () => Facebook );