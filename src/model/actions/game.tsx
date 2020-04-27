import Superagent from 'superagent';
import { Dispatch } from 'redux';
import { Game } from '../../shared/types/game';
import { GameActionTypes } from './types';

export const createGame = (name: string) => {
    return (dispatch: Dispatch<CreateGameAction>) => {
		Superagent.post(`${process.env.REACT_APP_API_SERVICE}/games`)
			.send({ name })
			.set('Content-Type', 'application/json')
			.end((err: any, res: any) => {
				try {
                    dispatch({
						type: GameActionTypes.CREATE_GAME,
						payload: res.body
					})
				} catch (e) {
					console.log(e);
				}
			});
	};
};

interface CreateGameAction {
	type: GameActionTypes.CREATE_GAME
	payload: Game
}

export type GameActions = CreateGameAction;