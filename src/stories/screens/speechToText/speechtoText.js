import * as React from "react";
import { AppRegistry, View, TouchableHighlight ,TouchableOpacity ,  Image } from 'react-native';
import { Container, Content, Header, Body, Title, Button, Text, Icon, Footer } from "native-base";

// import React, { Component } from 'react';
// import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Speech extends React.Component<Props, State> {
    render() {
        return (
        <View>
      <TouchableOpacity  
          onPress={ ()=>{this.props.navigation.navigate("Home")}}>
                

         
      <Image    source={require('../../../../assets/speech.png')} style={
 {
 margin: '10%', 
	width: 300,
    height: 500,
    // resizeMode: 'cover', // or 'stretch'
  }			} />
       
        </TouchableOpacity > 

    </View>
        
        )

 
    }
}
  
export default Speech;
