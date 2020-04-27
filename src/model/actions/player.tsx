import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { IStore } from '../Store';
import { setGameLoading } from './game';
import { setError } from './error';

export const getPlayer = () => {
    return async (dispatch: Dispatch<any>, getState: () => IStore) => {
		const state = getState();

		await request.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/player`)
			.set('Content-Type', 'application/json')
			.then(res => {
				dispatch({
					type: ActionTypes.GET_PLAYER,
					payload: res.body
				});
			})
			.then(() => {
				dispatch(getCards());
			})
			.catch(err => {
				dispatch(setError(err.response, err.status));
			});
	};
};

export const getCards = () => {
    return async (dispatch: Dispatch<any>, getState: () => IStore) => {
		const state = getState();

		await request.get(`${process.env.REACT_APP_API_SERVICE}/players/${state.player.id}/cards`)
			.set('Content-Type', 'application/json')
			.then(res => {
				dispatch({
					type: ActionTypes.GET_CARDS,
					payload: res.body
				});
			})
			.then(() => {
				dispatch(setGameLoading(true));
			})
			.catch(err => {
				dispatch(setError(err.response, err.status));
			});
	};
};

export const selectCard = (cardId: string) => {
	return {
		type: ActionTypes.SELECT_CARD,
		payload: cardId
	};
}