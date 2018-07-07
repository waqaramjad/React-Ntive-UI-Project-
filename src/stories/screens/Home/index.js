import * as React from "react";
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
    return (
      <Container style={styles.container}>
      {/* // <Container style={}> */}
        <Header style={{ backgroundColor:'white'}}>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                style={{  color : 'black'}}
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body >
            <Title>My Home</Title>
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
<Container>
        <Header />
        <Content>
          <Card>
            <CardItem  style={{backgroundColor : 'green'}}>
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
            <CardItem style={{backgroundColor : 'yellow'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
                </Text>
              </Body>
            </CardItem>
           
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
