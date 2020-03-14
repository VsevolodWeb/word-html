//import {Dispatch} from "redux";

const SWITCH_THEME = '/header/SWITCH_THEME';

export enum ThemesList {
	dark,
	light
}

type InitialStateType = {
	url: string
	theme: ThemesList
}
export const initialState: InitialStateType = {
	url: "https://word-html.com",
	theme: ThemesList.dark
};

type ActionsType = SetThemeType;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
		case SWITCH_THEME:
			return {
				...state,
				theme: action.theme || state.theme === ThemesList.light ? ThemesList.dark : ThemesList.light
			};

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

/*export const setThemeThunkCreator = () => (dispatch: Dispatch<ActionsType>) => {
	const a = 1;

	if (a === 1) {
		dispatch(setTheme(ThemesList.dark))
	} else {
		dispatch(setTheme(ThemesList.light))
	}
};*/

export default appReducer;