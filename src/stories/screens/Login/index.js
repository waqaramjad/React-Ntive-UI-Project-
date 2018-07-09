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
  }
				} ></Image>

				<Image   source={require('../../../../assets/logo.png')}
				style={{position: 'absolute' , height : 400 , width : 350 , marginTop:'25%' }}
				></Image>
				
		
				<View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', marginTop:'70%' , alignItems: 'center'
			,borderRadius: 4,
			borderWidth: 0.5,
			
			}}>	
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}
						 style={{ width:250 , marginTop: 10 , borderRadius:10,
							borderWidth: 1, }}
						>
							<Text>Send Link</Text>
						</Button>
					</View>
					</View>
				 <Footer style={{ position: 'absolute' ,  bottom: 0 , backgroundColor:'transparent' }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" , backgroundColor:'transparent' }}>
						
						<Text style={{ backgroundColor:'transparent', color:'#FFFFFF'}}>ButterFly is a register trademark of {"\n"}WindowMirror Inc.register in USA </Text>
						
					</View>
				</Footer> 
			</Container>
		);
	}
}

export default Login;
