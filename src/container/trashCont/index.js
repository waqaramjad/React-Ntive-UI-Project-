import * as React from "react";
import Trash from "../../stories/screens/trash/trash";
export interface Props {
	navigation: any,
}
export interface State {}
export default class TrashContainer extends React.Component<Props, State> {
    render() {
      
        return <Trash navigation={this.props.navigation} />;



    }




}