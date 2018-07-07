import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function,
}
export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Image source={require('../../../../assets/bg.png')} style={
{
	flex: 1,
	width: null,
    height: null,
    // resizeMode: 'cover', // or 'stretch'
  }
				} ></Image>

				<Image   source={require('../../../../assets/logo.png')}
				style={{position: 'absolute' , height : 250 , width : 250 }}
				></Image>
				{/* <Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Icon name="flash" style={{ fontSize: 104 }} />
						<Title>ReactNativeSeed.com</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Build Something Amazing
							</Text>
						</View>
					</Body>
				</Header> */}
				{/* <Content> */}
				<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
			,borderRadius: 4,
			borderWidth: 0.5,
			borderColor: 'green',
			}}>	
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}
						 style={{ width:500 , marginTop: 10 }}
						>
							<Text>Login</Text>
						</Button>
					</View>
					</View>
				{/* </Content> */}
				{/* <Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made with love at </Text>
						</View>
						<Image
							source={{ uri: "https://geekyants.com/images/logo-dark.png" }}
							style={{ width: 422 / 4, height: 86 / 4 }}
						/>
					</View>
				</Footer> */}
			</Container>
		);
	}
}

export default Login;
