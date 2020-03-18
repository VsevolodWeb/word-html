import React from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Converter from "./Converter";
import {AppStateType} from "../../redux/store";
import {connect} from "react-redux";

type MapStateToProps = {}
type MapDispatchToProps = {}
type OwnType = {}
type PropsType = MapStateToProps & MapDispatchToProps & OwnType
type StateType = {
	editorState: EditorState
}

class ConverterContainer extends React.Component<PropsType, StateType> {
	state = {
		editorState: EditorState.createEmpty(),
	};

	onEditorStateChange = (editorState: EditorState) => {
		this.setState({
			editorState,
		});
	};

	render() {
		const {editorState} = this.state;

		return <Converter editorState={editorState}
		                  onEditorStateChange={this.onEditorStateChange}
		                  result={draftToHtml(convertToRaw(editorState.getCurrentContent()))}/>
	}
}

const mapStateToProps = () => ({});

export default connect<MapStateToProps, MapDispatchToProps, OwnType, AppStateType>(mapStateToProps, {})(ConverterContainer);