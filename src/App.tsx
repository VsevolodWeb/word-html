import React from 'react';
import "./styles/styles.sass";
import HeaderContainer from "./components/Header/HeaderContainer";
import {ThemesList} from "./redux/app-reducer";
import {MapStateToPropsType} from "./AppContainer";
import s from "./App.module.sass"
import ConverterContainer from "./components/Converter/ConverterContainer";


function App(props: MapStateToPropsType) {
	return (
		<div data-theme={ThemesList[props.theme]} className={s.wrapper}>
			<HeaderContainer/>
			<ConverterContainer/>
		</div>
	);
}

export default App;
