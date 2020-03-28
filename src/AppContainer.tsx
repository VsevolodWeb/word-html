import React from 'react';
import {connect} from "react-redux";
import {ThemesList} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import App from "./App";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-162103612-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export type MapStateToPropsType = {
	theme: ThemesList
	email: string
}
export type PropsType = MapStateToPropsType

class AppContainer extends React.Component<PropsType> {
	render() {
		return <App theme={this.props.theme} email={this.props.email}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	theme: state.app.theme,
	email: state.app.email
});

export default connect(mapStateToProps)(AppContainer);