import React from 'react';
import {connect} from "react-redux";
import {ThemesList} from "./redux/app-reducer";

type MapStateToPropsType = {
	theme: ThemesList
}
type MapDispatchToPropsType = {
	setTheme: typeof setTheme
}
type OwnType = {}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType;

class AppContainer extends React.Component<PropsType> {

}

export connect({}, {})(AppContainer);