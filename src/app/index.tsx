import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../model/Store';
import App from './App';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		(window as any)['__REDUX_DEVTOOLS_EXTENSION__'] ? (window as any)['__REDUX_DEVTOOLS_EXTENSION__']() : (f: any) => f
	)
);

const AppWrapper = () => {

	return <Provider store={store}>{<App />}</Provider>;
};

export default AppWrapper