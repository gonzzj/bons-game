import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { IStore } from '../Store';
import { setError } from './error';

export const getEnemy = () => {
    return async (dispatch: Dispatch<any>, getState: () => IStore) => {
		const state = getState();

		await request.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/monster`)
			.set('Content-Type', 'application/json')
			.then(res => {
				dispatch({
					type: ActionTypes.GET_ENEMY,
					payload: res.body
				});
			})
			.catch(err => {
				dispatch(setError(err.response, err.status));
			});
	};
};