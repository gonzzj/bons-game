import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import './styles/styles.scss';
import Login from '../features/Login';
import Gameboard from '../features/Gameboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import { selectGameId } from '../model/selectors/game';
import { selectEnemyId } from '../model/selectors/enemy';
import { selectPlayerId } from '../model/selectors/player';
import { createPlayer } from '../model/actions/player';
import { createEnemy } from '../model/actions/enemy';

const App = () => {
	const idGame: string = useSelector(selectGameId);
	const idPlayer: string = useSelector(selectPlayerId);
	const idEnemy: string = useSelector(selectEnemyId);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!isEmpty(idGame)) {
			dispatch(createPlayer());
			dispatch(createEnemy());
		}
	}, [dispatch, idGame]);

	return (
		<>
			<CssBaseline />
			{(isEmpty(idGame) && isEmpty(idEnemy) && isEmpty(idPlayer)) ? <Login /> : <Gameboard/>}
		</>
	);
};

export default App;
