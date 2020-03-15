import React from 'react';
import Editor from "./Editor";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";

type MapStateToProps = {}
type MapDispatchToProps = {}
type OwnType = {}
type PropsType = MapStateToProps & MapDispatchToProps & OwnType
type StateType = {}

class EditorContainer extends React.Component<PropsType, StateType> {
	render() {
		return <Editor/>
	}
}

const mapStateToProps = (state: AppStateType) => ({

});

export default connect<MapStateToProps, MapDispatchToProps, OwnType, AppStateType>(mapStateToProps, {})(EditorContainer);