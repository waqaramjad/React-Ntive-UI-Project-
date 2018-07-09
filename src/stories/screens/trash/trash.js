import * as React from "react";
import Swipeout from 'react-native-swipeout';
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
export interface Props {
	navigation: any;
}
export interface State {}
class Trash extends React.Component<Props, State> {
    render() {
        var data1 = 'NativeBase is made from effective building blocks referred to as components.'
        var data2 = 'NativeBase is made from effective building blocks referred to .'
        var data3 = 'NativeBase is made from effective building blocks '
        var data4 = 'NativeBase is made from effective building blocks of the UI component'
       
        var sec1 = '00:00:09'
        var sec2 = '00:15:10'
        var sec3 = '00:20:30'
        var sec4 = '30:20:30'
    
        var date1 = 'Mar 8 , 2018'
        var date2 = 'Jan 6 , 2018'
        var date3 = 'Aug 4 , 2018'
        var date4 = 'Aprl 4 , 2018'
    
        var time1 = '2:25 PM'
        var time2 = '1:25 AM'
        var time3 = '12:03 AM'
        var time4 = '01:03 AM'

        var swipeoutBtns = [
            
             { text: 'Delete ', 
              backgroundColor: 'red'},
              {
                text : 'Restore', 
                backgroundColor: 'green'
              }
            
            
          ]
        return (
<Container >
 
        	<Header style={{ backgroundColor:'white'}}>
					
				
          <Left>
            <Icon style={{ backgroundcolor:'gray' , marginTop:'10%'}} name="ios-arrow-back" />
        </Left>
         <Body >
         <TouchableOpacity  
         onPress={ ()=>{this.props.navigation.navigate("SpeechRoute")}}>
         <Image  source={require('../../../../assets/top.png')} style={{width: 50, height: 50 , marginLeft:'50%', marginTop: '10%' }} />
        </ TouchableOpacity>
         
         </Body>
         <Right />
       </Header>
        <Content>
           
            
          <Card  >
         
            <CardItem   >
           
              <Text style={{marginRight:'20%'}}>{sec1}</Text>
              <Text  style={{marginRight:'15%' }}>{date1}</Text>
              <Text>{time1} </Text>
              <Icon active name="dots-horizontal" />
              
            </CardItem>
        <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}>
              <Body>
                <Text>
                {data1} 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         {/* </Button> */}

         <Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>{sec1}</Text>
              <Text  style={{marginRight:'15%' }}>{date2}</Text>
              <Text>{time2} </Text>
              <Icon active name="md-arrow-dropright" />

            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}>
              <Body>
                <Text>
                 {data2}
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         <Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>{sec3}</Text>
              <Text  style={{marginRight:'15%' }}>{date3}</Text>
              <Text>{time3}</Text>
              <Icon active name="md-arrow-dropright" />

            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}>
              <Body>
                <Text>
{data3}                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
        
        </Content>
      </Container>

          
         
        )

 
    }
}
  
export default Trash;
