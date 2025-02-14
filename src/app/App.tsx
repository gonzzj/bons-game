import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import './styles/styles.scss';
import Login from '../features/Login';
import Gameboard from '../features/Gameboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { selectGameId } from '../model/selectors/game';
import ErrorBoundary from './ErrorBoundary';
import { selectError } from '../model/selectors/error';
import Error from '../shared/types/error';

const App = () => {
	const idGame: string = useSelector(selectGameId);
	const error: Error = useSelector(selectError);

	return (
		<>
			<CssBaseline />
			<ErrorBoundary errorRes={error}>
				{isEmpty(idGame) ? <Login /> : <Gameboard/>}
			</ErrorBoundary>
		</>
	);
};

export default App;
