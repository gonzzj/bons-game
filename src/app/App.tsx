import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import './styles/styles.scss';
import Login from '../features/Login';
import Gameboard from '../features/Gameboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { selectGameId } from '../model/selectors/game';

const App = () => {
	const idGame: string = useSelector(selectGameId);

	return (
		<>
			<CssBaseline />
			{isEmpty(idGame) ? <Login /> : <Gameboard/>}
		</>
	);
};

export default App;
