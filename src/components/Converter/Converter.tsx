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
					toolbar={{
						inline: {
							options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript']
						},
						options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'remove', 'history']
					}}
					wrapperClassName={s.wordEditor}
					onEditorStateChange={props.onEditorStateChange}
					toolbarClassName={s.wordEditor__toolbar}
					editorClassName={s.wordEditor__area}
					placeholder="Copy from any text editor here"
				/>
				<textarea
					className={s.htmlEditor}
					value={props.result}
					disabled
				/>
			</div>
		</div>
	);
};

export default Converter;