import React from 'react';
import './styles/styles.scss';
import Login from '../features/Login';
import Gameboard from '../features/Gameboard';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
	return (
		<>
			<CssBaseline />
			<Gameboard />
		</>
	);
};

export default App;