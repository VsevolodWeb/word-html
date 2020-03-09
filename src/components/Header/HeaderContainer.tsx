import React from 'react';

import Header from "./Header";
import {connect} from "react-redux";
import {setThemeThunkCreator, SetThemeType, ThemesList} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/store";

export type PropsType = {
	theme: ThemesList
	setTheme: (theme: ThemesList) => SetThemeType
}


class HeaderContainer extends React.Component<PropsType> {
	render() {
		return <Header theme={this.props.theme} setTheme={this.props.setTheme}/>
	}
}


const mapStateToProps = (state: AppStateType) => ({
	theme: state.app.theme
});

const mapDispatchToProps = () => ({
	setTheme: setThemeThunkCreator
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)