import React, {useState} from 'react';
import {Editor, EditorState} from 'react-draft-wysiwyg';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import s from './Converter.module.sass';

type PropsType = {
	editorState: EditorState
	onEditorStateChange: (editorState: EditorState) => void
	result: string
}

const Converter: React.FC<PropsType> = props => {
	const [isCopied, setIsCopied] = useState(false);

	const onCopy = () => {
		setIsCopied(true);

		setTimeout(() => setIsCopied(false), 1500);
	};

	return (
		<div className="container">
			<div className={s.editor}>
				<div className={s.wordEditorWrapper}>
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
						stripPastedStyles={true}
					/>
					<svg className={s.editor__icon} width="29" height="49" viewBox="0 0 29 49" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M19.2549 24.5104L0.788209 6.17878C0.279726 5.67524 8.65834e-07 5.00198 8.65834e-07 4.28411C8.65834e-07 3.56585 0.279726 2.89299 0.788209 2.38865L2.40636 0.783203C2.91404 0.278065 3.59269 0 4.31589 0C5.03908 0 5.71692 0.278065 6.225 0.783203L28.2126 22.6085C28.7227 23.1145 29.002 23.7905 29 24.5092C29.002 25.231 28.7231 25.9063 28.2126 26.4126L6.24547 48.2168C5.73739 48.7219 5.05955 49 4.33595 49C3.61276 49 2.93491 48.7219 2.42643 48.2168L0.808677 46.6113C-0.244007 45.5664 -0.244007 43.8654 0.808677 42.8208L19.2549 24.5104Z"/>
					</svg>
				</div>
				<div>
					<textarea
						className={s.htmlEditor}
						value={props.result}
						disabled
					/>
					<CopyToClipboard text={props.result}
					                 onCopy={onCopy}>
						<button className="button button_default">
							{isCopied ? "Copied" : "Copy HTML"}
						</button>
					</CopyToClipboard>
				</div>
			</div>
		</div>
	);
};

export default Converter;