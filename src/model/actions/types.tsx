// ACTIONS

import { Game } from '../../shared/types/game';
import { Player } from '../../shared/types/player';
import { Enemy } from '../../shared/types/enemy';
import { Card } from '../../shared/types/card';
import { Effect } from '../../shared/types/effect';

export enum ActionTypes {
	CREATE_GAME = "CREATE_GAME",
	END_TURN = "END_TURN",
	SET_GAME_LOADING = "SET_GAME_LOADING",
	SET_END_TURN_LOADING = "SET_END_TURN_LOADING",
	SET_MODAL_EFFECTS = "SET_MODAL_EFFECTS",
	END_GAME = "END_GAME",
    GET_PLAYER = "GET_PLAYER",
	GET_ENEMY = "GET_ENEMY",
	GET_CARDS = "GET_CARDS",
	SELECT_CARD = "SELECT_CARD",
	SET_ERROR = "SET_ERROR"
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

export interface SetGameLoadingAction {
	type: ActionTypes.SET_GAME_LOADING,
	payload: boolean
}

export interface SetEndTurnLoadingAction {
	type: ActionTypes.SET_END_TURN_LOADING,
	payload: boolean
}

export interface setModalEffectsAction {
	type: ActionTypes.SET_MODAL_EFFECTS,
	payload: boolean
}

export interface EndGameAction {
	type: ActionTypes.END_GAME
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

export interface SetErrorAction {
	type: ActionTypes.SET_ERROR
	payload: {
		error: Response,
		status: number
	}
}

export type GameActions = CreateGameAction | EndTurnAction | SetGameLoadingAction | SetEndTurnLoadingAction | EndGameAction | setModalEffectsAction;

export type PlayerActions = GetPlayerAction | GetCardsAction | SelectCardAction | EndTurnAction | EndGameAction;

export type EnemyActions = GetEnemyAction | EndTurnAction | EndGameAction;

export type ErrorActions = SetErrorAction;