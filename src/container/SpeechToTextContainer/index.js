import * as React from "react";
import Speech from "../../stories/screens/speechToText/speechtoText";
export interface Props {
	navigation: any,
}
export interface State {}
export default class SpeechContainer extends React.Component<Props, State> {
    render() {
      
        return <Speech navigation={this.props.navigation} />;



    }




}