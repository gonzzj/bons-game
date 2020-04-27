import { combineReducers } from 'redux';
import { gameboard } from './reducers/game';
import { Game } from '../shared/types/game';

const stores = {
	game: gameboard
};

export interface IStore {
	game: Game
}

export default combineReducers(stores);
