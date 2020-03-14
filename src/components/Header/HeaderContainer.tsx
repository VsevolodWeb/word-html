import React from 'react';

import Header from "./Header";
import {connect} from "react-redux";
import {setTheme, ThemesList} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/store";

type MapStateToPropsType = {
	url: string
	theme: ThemesList
}
type MapDispatchToPropsType = {
	setTheme: typeof setTheme
}
type OwnType = {}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType;

class HeaderContainer extends React.Component<PropsType> {
	render() {
		return <Header url={this.props.url} theme={this.props.theme} setTheme={this.props.setTheme}/>
	}
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	url: state.app.url,
	theme: state.app.theme
});


export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnType, AppStateType>(mapStateToProps, {
	setTheme: setTheme
})(HeaderContainer)