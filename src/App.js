// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import SpeechRoute from "./container/SpeechToTextContainer/index";
import Trashroute from "./container/trashCont/index"
import Splashroute from "./container/SplashCont/index"
const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		SpeechRoute:{screen: SpeechRoute},
		Trashroute:{screen: Trashroute} , 
		Splashroute :{screen:Splashroute}

	},
	{
		initialRouteName: "Splashroute",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);