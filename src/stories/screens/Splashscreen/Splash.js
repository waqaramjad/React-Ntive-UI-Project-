import * as React from "react";

import { AppRegistry, View, TouchableHighlight ,TouchableOpacity ,  Image } from 'react-native';

import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem , 
    Card, CardItem
} from "native-base";
// import React, { Component } from 'react';
// import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Splash extends React.Component<Props, State> {
    
    componentDidMount() {
            
       
    
    // var a = this.props.navigation.navigate("Home") 
    var a = this.props.navigation
   
        setTimeout(function(){ a.navigate('Login')}, 5500);
    
    }
   
    render() {
               
        
        return (
<Container >
<Image source={require('../../../../assets/spash.gif')} style={
{
	flex: 1,
	width: null,
    height: null,
  }
				} ></Image>
        
      </Container>

          
         
        )

 
    }
}
  
export default Splash;
