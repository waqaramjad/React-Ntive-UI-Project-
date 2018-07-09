import * as React from "react";
import Splash from "../../stories/screens/Splashscreen/Splash";  
export interface Props {
	navigation: any,
}
export interface State {}
export default class SplashCont extends React.Component<Props, State> {
    render() {
      
        return <Splash navigation={this.props.navigation} />;



    }




}