// ACTIONS

import { Game } from '../../shared/types/game';
import { Player } from '../../shared/types/player';
import { Enemy } from '../../shared/types/enemy';
import { Card } from '../../shared/types/card';
import { Effect } from '../../shared/types/effect';

export enum ActionTypes {
	CREATE_GAME = "CREATE_GAME",
	END_TURN = "END_TURN",
	SET_LOADING = "SET_LOADING",
    GET_PLAYER = "GET_PLAYER",
	GET_ENEMY = "GET_ENEMY",
	GET_CARDS = "GET_CARDS",
	SELECT_CARD = "SELECT_CARD"
}

export interface CreateGameAction {
	type: ActionTypes.CREATE_GAME
	payload: Game
}

export interface EndTurnAction {
	type: ActionTypes.END_TURN,
	payload: {
		game: Game,
		monsterEffect: {
			effect: Effect,
			value: number
		}
	}
}

export interface SetLoadingAction {
	type: ActionTypes.SET_LOADING,
	payload: boolean
}

export interface GetPlayerAction {
	type: ActionTypes.GET_PLAYER
	payload: Player
}

export interface GetCardsAction {
	type: ActionTypes.GET_CARDS
	payload: Card[]
}

export interface SelectCardAction {
	type: ActionTypes.SELECT_CARD
	payload: string
}

export interface GetEnemyAction {
	type: ActionTypes.GET_ENEMY
	payload: Enemy
}

export type GameActions = CreateGameAction | EndTurnAction | SetLoadingAction;

export type PlayerActions = GetPlayerAction | GetCardsAction | SelectCardAction | EndTurnAction;

export type EnemyActions = GetEnemyAction;