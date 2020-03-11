import React from 'react';
import {connect} from "react-redux";
import {ThemesList} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import App from "./App";

export type MapStateToPropsType = {
	theme: ThemesList
}
export type PropsType = MapStateToPropsType

class AppContainer extends React.Component<PropsType> {
	render() {
		return <App theme={this.props.theme}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	theme: state.app.theme
});

export default connect(mapStateToProps)(AppContainer);