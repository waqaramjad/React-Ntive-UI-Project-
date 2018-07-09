import * as React from "react";
import { Text, Container, List, ListItem, Content ,Icon,Button , View,  Switch ,Right,  Left ,  Body} from "native-base";
import { NavigationActions } from "react-navigation";
// import Right from "../../../theme/components/Right";
// import { Switch } from "react-native-switch";

const routes = [
	{
		route: "Home",
		caption: "Always Listening",
	},
	{
		route: "BlankPage",
		caption: "About Butterfly",
	},
	{
		route: "Login",
		caption: "Trash",
	},
	{
		route: "SpeechRoute",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					{/* <Text style={{marginTop:'10%' , marginLeft:2, marginBottom:'-20%'}}>Always Listning */}
					
					
					{/* </Text> */}

					{/* <Switch value={true} style={{marginTop:'10%'}}/> */}
					<List
						style={{ marginTop: 40 }}>
											
											
											<ListItem icon>
												<Left/>
												<Body>

			<Text>Always Listning</Text>

												</Body>

											 <Right>
											<Switch value={true}/>

												</Right>	 
												</ListItem>	
							
								<ListItem icon>
            <Left>
              {/* <Button > */}
                <Icon active name="ios-information-circle-outline" />
              {/* </Button> */}
            </Left>
            <Body>
              <Text>About Butterfly</Text>
            </Body>
            
          </ListItem>

		  <ListItem icon button onPress={() => this.props.navigation.navigate("Trashroute" )} >
            <Left>
              {/* <Button > */}
                <Icon active name="trash" />
              {/* </Button> */}
            </Left>
            <Body>
              <Text>Trash</Text>
            </Body>
           
          </ListItem>
		  <ListItem icon>
            <Left>
              {/* <Button > */}
                <Icon active name="sign-out" />
              {/* </Button> */}
            </Left>
            <Body>
              <Text>Sign Out</Text>
            </Body>
           
          </ListItem>





						
					</List>
				</Content>
			</Container>
		);
	}
}
