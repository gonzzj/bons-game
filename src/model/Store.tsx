import { combineReducers } from 'redux';
import { gameboard } from './reducers/game';
import { player } from './reducers/player';
import { enemy } from './reducers/enemy';
import { Game } from '../shared/types/game';
import { Player } from '../shared/types/player';
import { Enemy } from '../shared/types/enemy';

const stores = {
	game: gameboard,
	player: player,
	enemy: enemy
};

export interface IStore {
	game: Game,
	player: Player,
	enemy: Enemy
}

export default combineReducers(stores);
