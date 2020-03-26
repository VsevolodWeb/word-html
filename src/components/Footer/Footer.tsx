import React from 'react';
import {PropsType} from "./FooterContainer";
import cn from "classnames";
import Modal from 'react-modal';

import s from './Footer.module.sass';


Modal.setAppElement('#root');

const Footer = (props: PropsType) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	return (
		<footer className={s.footer}>
			<div className={cn("container", s.footerContainer)}>
				<div>
					<p>© {(new Date()).getFullYear()}, Convert Word to HTML</p>
					<p>For all questions: <a href={"mailto:" + props.email} target="_blank" rel="noopener noreferrer">{props.email}</a></p>
				</div>
				<div className={s.footer__links}>
					<button onClick={openModal}>Terms</button>
					<Modal isOpen={modalIsOpen} style={{
						content: {
							top: '50%',
							left: '50%',
							right: 'auto',
							bottom: 'auto',
							marginRight: '-50%',
							transform: 'translate(-50%, -50%)'
						}}
					}>
						Modalka!
					</Modal>
				</div>
			</div>
		</footer>
	)
};

export default Footer;