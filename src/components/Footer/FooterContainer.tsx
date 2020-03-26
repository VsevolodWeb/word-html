import React from 'react';
import Footer from "./Footer";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";

type MapStateToPropsType = {
	email: string
}
type MapDispatchToPropsType = {}
type OwnType = {}
export type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnType

class FooterContainer extends React.Component<PropsType> {
	render() {
		return <Footer email={this.props.email}/>
	}
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
	email: state.app.email
});

export default connect<MapStateToPropsType, MapDispatchToPropsType,
	OwnType, AppStateType>(mapStateToProps, {})(FooterContainer);