import React from 'react';
import {Editor, EditorState} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import s from './Converter.module.sass';

type PropsType = {
	editorState: EditorState
	onEditorStateChange: (editorState: EditorState) => void
	result: string
}

const Converter: React.FC<PropsType> = props => {
	return (
		<div className="container">
			<div className={s.editor}>
				<Editor
					editorState={props.editorState}
					wrapperClassName={s.wordEditor}
					onEditorStateChange={props.onEditorStateChange}
					toolbarClassName={s.wordEditor__toolbar}
					editorClassName={s.wordEditor__area}
				/>
				<textarea
					className={s.htmlEditor}
					disabled
					value={props.result}
				/>
			</div>
		</div>
	);
};

export default Converter;