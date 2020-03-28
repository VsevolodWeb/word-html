import {loadState, saveState} from "../utils/localstorage";

const SWITCH_THEME = '/header/SWITCH_THEME';

export enum ThemesList {
	light,
	dark
}

type InitialStateType = {
	url: string
	email: string
	theme: ThemesList
}
export const initialState: InitialStateType = {
	url: "http://word-html.com",
	email: "info@word-html.com",
	theme: loadState() ? loadState().theme : ThemesList.light
};

type ActionsType = SetThemeType;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch(action.type) {
		case SWITCH_THEME:
			const result = {
				...state,
				theme: action.theme || state.theme === ThemesList.light ? ThemesList.dark : ThemesList.light
			};

			saveState({
				theme: result.theme
			});

			return result;

		default:
			return state;
	}
};

export type SetThemeType = {
	type: typeof SWITCH_THEME
	theme?: ThemesList
}
export const setTheme = (theme?: ThemesList): SetThemeType => {
	return {type: SWITCH_THEME, theme}
};

export default appReducer;