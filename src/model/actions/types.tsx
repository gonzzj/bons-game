// ACTIONS

import { Game } from '../../shared/types/game';
import { Player } from '../../shared/types/player';
import { Enemy } from '../../shared/types/enemy';
import { Card } from '../../shared/types/card';

export enum ActionTypes {
    CREATE_GAME = "CREATE_GAME",
    CREATE_PLAYER = "CREATE_PLAYER",
	CREATE_ENEMY = "CREATE_ENEMY",
	GET_CARDS = "GET_CARDS"
}

export interface CreateGameAction {
	type: ActionTypes.CREATE_GAME
	payload: Game
}

export interface CreatePlayerAction {
	type: ActionTypes.CREATE_PLAYER
	payload: Player
}

export interface GetCardsAction {
	type: ActionTypes.GET_CARDS
	payload: Card[]
}

export interface CreateEnemyAction {
	type: ActionTypes.CREATE_ENEMY
	payload: Enemy
}

export type GameActions = CreateGameAction;

export type PlayerActions = CreatePlayerAction | GetCardsAction;

export type EnemyActions = CreateEnemyAction;