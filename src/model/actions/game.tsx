import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { getPlayer } from './player';
import { getEnemy } from './enemy';
import { IStore } from '../Store';
import { setError } from './error';

export const createGame = (name: string) => {
    return async (dispatch: Dispatch<any>) => {
		await request.post(`${process.env.REACT_APP_API_SERVICE}/games`)
			.send({ name })
			.set('Content-Type', 'application/json')
			.then(res => {
				dispatch({
					type: ActionTypes.CREATE_GAME,
					payload: res.body
				})
			})
			.then(() => {
				dispatch(getPlayer());
				dispatch(getEnemy());
			})
			.catch(err => {
				dispatch(setError(err.response, err.status));
			});
	};
};

export const endTurn = () => {
	return async (dispatch: Dispatch<any>, getState: () => IStore) => {
		const state = getState();
		const gameId = state.game.id;
		const card = state.player.cardSelected;

		dispatch(setEndTurnLoading(true));
		
		await request.post(`${process.env.REACT_APP_API_SERVICE}/games/${gameId}/next-turn`)
			.send({ card })
			.set('Content-Type', 'application/json')
			.then(res => {
				dispatch({
					type: ActionTypes.END_TURN,
					payload: res.body
				})
			})
			.then(() => {
				dispatch(getPlayer());
				dispatch(getEnemy());
			})
			.catch(err => {
				dispatch(setError(err.response, err.status));
			});

		dispatch(setEndTurnLoading(false));
		dispatch(setModalEffects(true));
	};
};

export const setGameLoading = (loading: boolean) => {
	return {
		type: ActionTypes.SET_GAME_LOADING,
		payload: loading
	};
};

export const setEndTurnLoading = (loading: boolean) => {
	return {
		type: ActionTypes.SET_END_TURN_LOADING,
		payload: loading
	};
};

export const setModalEffects = (open: boolean) => {
	return {
		type: ActionTypes.SET_MODAL_EFFECTS,
		payload: open
	};
};

export const endGame = () => {
	return {
		type: ActionTypes.END_GAME
	};
};