import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, CreateGameAction, EndTurnAction } from './types';
import { getPlayer } from './player';
import { getEnemy } from './enemy';
import { IStore } from '../Store';

export const createGame = (name: string) => {
    return async (dispatch: Dispatch<CreateGameAction | any>) => {
		request.post(`${process.env.REACT_APP_API_SERVICE}/games`)
			.send({ name })
			.set('Content-Type', 'application/json')
			.then(res => {
				try {
                    dispatch({
						type: ActionTypes.CREATE_GAME,
						payload: res.body
					})
				} catch (e) {
					console.log(e);
				}
			})
			.then(() => {
				dispatch(getPlayer());
				dispatch(getEnemy());
			})
	};
};

export const endTurn = () => {
	return async (dispatch: Dispatch<EndTurnAction | any>, getState: () => IStore) => {
		const state = getState();
		const gameId = state.game.id;
		const card = state.player.cardSelected;

		request.post(`${process.env.REACT_APP_API_SERVICE}/games/${gameId}/next-turn`)
			.send({ card })
			.set('Content-Type', 'application/json')
			.then(res => {
				try {
                    dispatch({
						type: ActionTypes.END_TURN,
						payload: res.body
					})
				} catch (e) {
					console.log(e);
				}
			})
			.then(() => {
				dispatch(getPlayer());
				dispatch(getEnemy());
			})
	};
};

export const setLoading = (loading: boolean) => {
	return {
		type: ActionTypes.SET_LOADING,
		payload: loading
	}
}