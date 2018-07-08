import * as React from "react";
import Swipeout from 'react-native-swipeout';
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
   
    var sec1 = ''
    var sec2 = ''
    var sec3 = ''

    var date1 = ''
    var date2 = ''
    var date3 = ''

    var time1 = ''
    var time2 = ''
    var time3 = ''
    console.log(this.props.navigation)
    var swipeoutBtns = [
      {
        text: 'Delete', 
        backgroundColor: 'red'
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
          <Icon
                active
                name="trash"
                style={{  color : 'black'}}
                onPress={() => this.props.navigation.navigate("SpeechRoute")}
              />
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {/* {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { item }
                  })}
              >
                <Text>{item}</Text>
              </ListItem>
            ))} */}
<Container >
        {/* <Header /> */}
        <Content>
            {/* <Button style={{backgroundColor:'transparent' , height:'30%'}} */}
           
            
          <Card  >
          {/* <Card   onPress={() => {alert('You tapped the button!');
          console.log('hy')
 }}>  */}
            <CardItem  button onPress={() =>   this.props.navigation.navigate("BlankPage"  ,{
                    name:  'React Native Starter kit' 
                  })} >
            {/* <CardItem  > */}
           
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
        <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : 'gray'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         {/* </Button> */}

         <Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : 'gray'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         <Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : 'gray'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
                </Text>
              </Body>
            </CardItem>
         </Swipeout>
           
         </Card>
         <Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
            <Swipeout right={swipeoutBtns} >
            <CardItem style={{backgroundColor : 'gray'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
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
