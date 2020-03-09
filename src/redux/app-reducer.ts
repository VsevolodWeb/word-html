import {Dispatch} from "redux";

const SET_THEME = '/header/SET_THEME';

export enum ThemesList {
	dark,
	light
}

type InitialStateType = {
	theme: ThemesList
}
export const initialState: InitialStateType = {
	theme: ThemesList.light
};

type ActionsType = SetThemeType;

const appReducer = (state = initialState, action: ActionsType) => {
	switch(action.type) {
		case SET_THEME:
			return {...state, darkMode: action.theme};

		default:
			return state;
	}
};

export type SetThemeType = {
	type: typeof SET_THEME
	theme: ThemesList
}
export const setTheme = (theme: ThemesList): SetThemeType => ({type: SET_THEME, theme});

export const setThemeThunkCreator = () => (dispatch: Dispatch<ActionsType>) => {
	const a = 1;

	if(a === 1) {
		dispatch(setTheme(ThemesList.dark))
	} else {
		dispatch(setTheme(ThemesList.light))
	}
};

export default appReducer;