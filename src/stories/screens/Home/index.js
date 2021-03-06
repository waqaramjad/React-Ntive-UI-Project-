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

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
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
    console.log(this.props.navigation)
    var swipeoutBtns = [
      {
        // text: 'Delete', 
        backgroundColor: '#fd3232', 
        component: <Icon active name="trash" style={{margin:'30%'}}/>
     
      }
    ]
    return (
      <Container style={styles.container}>
      {/* // <Container style={}> */}
        <Header style={{ backgroundColor:'white'}}>
          <Left>
            <Button transparent>
              <Icon
                active name="menu"
                style={{  color:'black'}}
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body >
          <TouchableOpacity  
          onPress={ ()=>{this.props.navigation.navigate("SpeechRoute")}}>
          <Image  source={require('../../../../assets/top.png')} style={{width: 50, height: 50 , marginLeft:'50%', marginTop: '10%' }} />
         </ TouchableOpacity>
         
          </Body>
          <Right >
          <Icon
               style={{  color:'black' , marginTop : '5%'}}
                active name="search"
                
              />

          </Right>
        </Header>
        <Content>
          <List>
            
<Container >
       
        <Content>
           
            
          <Card  >
            <CardItem  button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                   name : 'NativeBase', 
                   seconds:  sec1 , 
                    date :  date1, 
                    time : time1 ,
                    data : data1 
                  })} >
           
              <Text style={{marginRight:'20%'}}>{sec1}</Text>
              <Text  style={{marginRight:'15%' }}>{date1}</Text>
              <Text>{time1} </Text>
              
            </CardItem  >
        <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}} button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                   name : 'NativeBase', 
                   seconds:  sec1 , 
                    date :  date1, 
                    time : time1 ,
                    data : data1 
                  })}>
              <Body>
                <Text>
                {data1} 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>

         <Card >
            <CardItem button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                   name : 'NativeBase', 
                   seconds:  sec2 , 
                    date :  date2, 
                    time : time2 ,
                    data : data2 
                  })} >
              <Text style={{marginRight:'20%'}}>{sec1}</Text>
              <Text  style={{marginRight:'15%' }}>{date2}</Text>
              <Text>{time2} </Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}
            button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
              name : 'NativeBase', 
              seconds:  sec2 , 
               date :  date2, 
               time : time2 ,
               data : data2 
             })}
            >
              <Body>
                <Text>
                 {data2}
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         <Card>
            <CardItem button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                   name : 'NativeBase', 
                   seconds:  sec3 , 
                    date :  date3, 
                    time : time3 ,
                    data : data3 
                  })} >
              <Text style={{marginRight:'20%'}}>{sec3}</Text>
              <Text  style={{marginRight:'15%' }}>{date3}</Text>
              <Text>{time3}</Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}
            button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
              name : 'NativeBase', 
              seconds:  sec3 , 
               date :  date3, 
               time : time3 ,
               data : data3 
             })}
            >
              <Body>
                <Text>
{data3}                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         <Card>
            <CardItem button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                   name : 'NativeBase', 
                   seconds:  sec4 , 
                    date :  date4, 
                    time : time4 ,
                    data : data4 
                  })} >
              <Text style={{marginRight:'20%'}}>{sec4}</Text>
              <Text  style={{marginRight:'15%' }}>{date4}</Text>
              <Text>{time4} </Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : '#E9EBEE'}}
            button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
              name : 'NativeBase', 
              seconds:  sec4 , 
               date :  date4, 
               time : time4 ,
               data : data4 
             })}
            >
              <Body>
                <Text>
{data4}                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
        </Content>
      </Container>

          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
