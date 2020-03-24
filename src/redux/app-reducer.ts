import {loadState, saveState} from "../utils/localstorage";

const SWITCH_THEME = '/header/SWITCH_THEME';

export enum ThemesList {
	light,
	dark
}

type InitialStateType = {
	url: string
	theme: ThemesList
}
export const initialState: InitialStateType = {
	url: "https://word-html.com",
	theme: loadState() ? loadState().theme : ThemesList.light
};

type ActionsType = SetThemeType;

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
	switch (action.type) {
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

/*export const setThemeThunkCreator = () => (dispatch: Dispatch<ActionsType>) => {
	const a = 1;

	if (a === 1) {
		dispatch(setTheme(ThemesList.dark))
	} else {
		dispatch(setTheme(ThemesList.light))
	}
};*/

export default appReducer;