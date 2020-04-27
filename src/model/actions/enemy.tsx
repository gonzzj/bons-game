import Superagent from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, CreateEnemyAction } from './types';
import { IStore } from '../Store';

export const createEnemy = () => {
    return async (dispatch: Dispatch<CreateEnemyAction>, getState: () => IStore) => {
		const state = getState();

		Superagent.get(`${process.env.REACT_APP_API_SERVICE}/games/${state.game.id}/monster`)
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
					dispatch({
						type: ActionTypes.CREATE_ENEMY,
						payload: res.body
					});
				}
				catch (e) {
					console.log(e);
				}
			});
	};
};