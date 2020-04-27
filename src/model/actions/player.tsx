import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, GetPlayerAction, GetCardsAction } from './types';
import { IStore } from '../Store';
import { setLoading } from './game';

export const getPlayer = () => {
    return async (dispatch: Dispatch<GetPlayerAction | any>, getState: () => IStore) => {
		const state = getState();

		request.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/player`)
			.set('Content-Type', 'application/json')
			.then(res => {
				try {
					dispatch({
						type: ActionTypes.GET_PLAYER,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			})
			.then(() => {
				dispatch(getCards());
			});
	};
};

export const getCards = () => {
    return async (dispatch: Dispatch<GetCardsAction | any>, getState: () => IStore) => {
		const state = getState();

		request.get(`${process.env.REACT_APP_API_SERVICE}/players/${state.player.id}/cards`)
			.set('Content-Type', 'application/json')
			.then(res => {
				try {
					dispatch({
						type: ActionTypes.GET_CARDS,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			})
			.then(() => {
				dispatch(setLoading(true));
			});
	};
};

export const selectCard = (cardId: string) => {
	return {
		type: ActionTypes.SELECT_CARD,
		payload: cardId
	}
}