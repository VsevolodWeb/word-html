import React, { useState } from 'react';
import s from "./Header.module.sass";
import logo from "../../assets/img/logo.svg";
import Switch from "react-switch";

type PropsType =  {

}

const Header = (props: PropsType) => {

	let [switchMode, setswitchMode] = useState(false);

	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__inner}>
					<img src={logo} className={s.header__logo} alt="word-html.com"/>
					<div className={s.header__info}>
						<div>
							{/*<Switch onChange={handleChange} checked={this.state.checked} />*/}
						</div>
						<div className={s.header__social}>
							<a href="!#">FB</a>
							<a href="!#">TW</a>
							<a href="!#">link</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;