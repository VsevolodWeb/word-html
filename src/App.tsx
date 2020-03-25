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
			<div className="container">
				<div className="text">
					<h1>Website to convert Word to HTML</h1>
					<p>Very often it is necessary for content managers and just ordinary people who support sites to convert their text from Word to HTML, and then paste it on the site.</p>
					<p>The site word-html.com allows you to convert text from any editor into an HTML structure and observe how HTML changes in real time depending on Word-like text.</p>
					<p>The development of the site was carried out solely in order to provide quality service. Hope it will always be free.</p>
					<p>In order to somehow motivate myself, I will show ads and pay for the server with the money earned and, I hope, get a little more so that I have a desire to make this service even better. I beg you to disable ad blockers on this site. Advertising will not bother you, but I will be pleased.</p>
					<p>Tell and share a link to this service.</p>
					<p>Thank you friends!</p>
					<h2>How to use?</h2>
					<p>Please copy the text to the editor. If necessary, make all the changes you need and get the result in the HTML window. At the bottom there is also a Copy HTML button, which contributes to the quick use of the service.</p>
					<p>By the way, I wrote this text in my favorite Pages and converted it using my own service!</p>
					<h2>What service can do?</h2>
					<ul>
					<li>The most important thing is to convert from copied text to html.</li>
					<li>Allows you to change the text in the editor: highlight in bold, italicize, underline the text, cross out the text, put an upper or lower index, change the font size, change the text type, change the font family, create and edit a numbered and unordered list, perform text alignment, highlight with color text, create a link to something, display a picture and specify its size, clean the text, formatting and extra styles.</li>
					<li>The editor saves the state of the text throughout the session with the site (after reloading the page, it is reset) and allows you to return to any step in writing the text.</li>
					</ul>
					<p>If you have any questions or suggestions for improvement, please write to me at info@word-html.com.</p>
				</div>
			</div>
		</div>
	);
}

export default App;
