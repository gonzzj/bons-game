import Superagent from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, CreatePlayerAction, GetCardsAction } from './types';
import { IStore } from '../Store';

export const createPlayer = () => {
    return async (dispatch: Dispatch<CreatePlayerAction>, getState: () => IStore) => {
		const state = getState();

		Superagent.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/player`)
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
					dispatch({
						type: ActionTypes.CREATE_PLAYER,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			});
	};
};

export const getCards = () => {
    return async (dispatch: Dispatch<GetCardsAction>, getState: () => IStore) => {
		const state = getState();

		Superagent.get(`${process.env.REACT_APP_API_SERVICE}/players/${state.player.id}/cards`)
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
					dispatch({
						type: ActionTypes.GET_CARDS,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			});
	};
};