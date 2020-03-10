import React from 'react';
import {Provider} from 'react-redux';

import store from "./redux/store";
import "./styles/styles.sass";
import HeaderContainer from "./components/Header/HeaderContainer";
import cn from "classnames";
import {ThemesList} from "./redux/app-reducer";


function App() {
	return (
		<div className={cn("wrapper", `wrapper_theme-${ThemesList[store.getState().app.theme]}`)}>
			<HeaderContainer/>
		</div>
	);
}

export default App;
