import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { isEmpty } from 'lodash';
import './styles/styles.scss';
import Login from '../features/Login';
import Gameboard from '../features/Gameboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import reducer from '../model/Store';
import { selectGameId } from '../model/selectors/game';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),
		(window as any)['__REDUX_DEVTOOLS_EXTENSION__'] ? (window as any)['__REDUX_DEVTOOLS_EXTENSION__']() : (f: any) => f
	)
);

const App = () => {
	const id = useSelector(selectGameId);

	return (
		<>
			<CssBaseline />
			{isEmpty(id) ? <Login /> : <Gameboard/>}
		</>
	);
};

const AppWrapper = () => {
	
	return <Provider store={store}>{<App />}</Provider>;
};

export default AppWrapper;
