// ACTIONS

import { Game } from '../../shared/types/game';
import { Player } from '../../shared/types/player';
import { Enemy } from '../../shared/types/enemy';

export enum ActionTypes {
    CREATE_GAME = "CREATE_GAME",
    CREATE_PLAYER = "CREATE_PLAYER",
    CREATE_ENEMY = "CREATE_ENEMY"
}

export interface CreateGameAction {
	type: ActionTypes.CREATE_GAME
	payload: Game
}

export interface CreatePlayerAction {
	type: ActionTypes.CREATE_PLAYER
	payload: Player
}

export interface CreateEnemyAction {
	type: ActionTypes.CREATE_ENEMY
	payload: Enemy
}

export type GameActions = CreateGameAction;

export type PlayerActions = CreatePlayerAction;

export type EnemyActions = CreateEnemyAction;