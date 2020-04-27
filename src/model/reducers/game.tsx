import { ActionTypes, GameActions } from '../actions/types';
import { Game } from '../../shared/types/game';

const initialState: Game = {
	id: "",
	currentTurn: 0,
	maxTurns: 0,
	turnsLeft: 0,
    createdAt: "",
    updatedAt: ""
};

export const gameboard = (state = initialState, action: GameActions): Game => {
    const { type, payload } = action;
    
	switch (type) {
		case ActionTypes.CREATE_GAME:
            const {id, currentTurn, maxTurns, turnsLeft, createdAt, updatedAt} = payload;

			return {
				...state,
				id,
				currentTurn,
				maxTurns,
				turnsLeft,
				createdAt,
				updatedAt
			};

		default:
			return state;
	}
};
