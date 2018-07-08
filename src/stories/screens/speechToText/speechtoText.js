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
// import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Speech extends React.Component<Props, State> {
    render() {
        return (
            <Container >
<Content>

<Card>
            <CardItem  >
              <Text style={{marginRight:'20%'}}>00:00:09</Text>
              <Text  style={{marginRight:'15%' }}>Mar 8 , 2018</Text>
              <Text>2:25 PM </Text>
            </CardItem>
            
            <CardItem style={{backgroundColor : 'gray'}}>
              <Body>
                <Text>
                NativeBase is made from effective building blocks referred to as components.
                 
                </Text>
              </Body>
            </CardItem>
       
           
         </Card>

    </Content>

                </Container>
        
        )

 
    }
}
  
export default Speech;

