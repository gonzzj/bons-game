import { combineReducers } from 'redux';
import { gameboard } from './reducers/game';
import { player } from './reducers/player';
import { enemy } from './reducers/enemy';
import { error } from './reducers/error';
import Game from '../shared/types/game';
import Player from '../shared/types/player';
import Enemy from '../shared/types/enemy';
import Error from '../shared/types/error';

const stores = {
	game: gameboard,
	player: player,
	enemy: enemy,
	error: error
};

export interface IStore {
	game: Game,
	player: Player,
	enemy: Enemy
	error: Error
}

export default combineReducers(stores);
