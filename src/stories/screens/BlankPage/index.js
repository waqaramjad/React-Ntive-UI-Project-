import * as React from "react";
// import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
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
import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
	render() {

		const param = this.props.navigation.state.params;
		var date = param.date
		var time = param.time
		var sec = param.seconds
		var data = param.data
		console.log(param)

		return (
			<Container style={styles.container}>
				<Header style={{ backgroundColor:'white'}}>
					
				
        <Button iconLeft light style={{marginTop:'2%'}}  onPress={() => this.props.navigation.goBack()}>
        <Icon  name='ios-arrow-back' />
       
      </Button>
          <Body >
          <TouchableOpacity  
          onPress={ ()=>{this.props.navigation.navigate("SpeechRoute")}}>
          <Image  source={require('../../../../assets/top.png')} style={{width: 50, height: 50 , marginLeft:'50%', marginTop: '10%' }} />
         </ TouchableOpacity>
          
          </Body>
          <Right />
				</Header>

				<Content >

				<Card style={{marginLeft: '5%' , marginRight:'5%'}} >
        
            
       
            <CardItem style={{backgroundColor : '#E9EBEE'}}>
              <Body>
                <Text>
                {data} 
                </Text>
              </Body>
            </CardItem>

			<CardItem  >
           
           
              <Text style={{marginRight:'20%'}}>{sec}</Text>
              <Text  style={{marginRight:'10%' }}>{date}</Text>
              <Text>{time} </Text>
              
            </CardItem>
       <CardItem footer>
	   <Right style={{marginLeft : '70%'}}>
	   <Image  source={require('../../../../assets/roundbutton.png')} style={{width: 30, height: 30 , marginLeft : '40%'}} />
  
	   </Right>

	   </CardItem>
           
         </Card>
				</Content>
			</Container>
		);
	}
}

export default BlankPage;
