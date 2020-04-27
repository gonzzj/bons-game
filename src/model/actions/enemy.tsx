import request from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, GetEnemyAction } from './types';
import { IStore } from '../Store';

export const getEnemy = () => {
    return async (dispatch: Dispatch<GetEnemyAction>, getState: () => IStore) => {
		const state = getState();

		request.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/monster`)
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
					dispatch({
						type: ActionTypes.GET_ENEMY,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			});
	};
};