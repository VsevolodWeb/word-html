import React from "react";
import s from "./Header.module.sass"

type PropsType =  {

}

const Header = (props: PropsType) => {
	return (
		<header className={s.header}>
			<div className="container">
				<div className={s.header__inner}>
					<div className={s.header__logo}>
						logo
					</div>
					<div className={s.header__info}>
						<div className={s.header__controls}>
							controls
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