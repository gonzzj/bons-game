import Superagent from 'superagent';
import { Dispatch } from 'redux';
import { ActionTypes, CreateGameAction } from './types';

export const createGame = (name: string) => {
    return async (dispatch: Dispatch<CreateGameAction>) => {
		Superagent.post(`${process.env.REACT_APP_API_SERVICE}/games`)
			.send({ name })
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
                    dispatch({
						type: ActionTypes.CREATE_GAME,
						payload: res.body
					})
				} catch (e) {
					console.log(e);
				}
			});
	};
};