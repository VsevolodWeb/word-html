import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer'


const rootReducer = combineReducers({
	app: appReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, compose(
	applyMiddleware(thunkMiddleware)
));

export default store;