import { GameActionTypes } from '../actions/types';
import { GameActions } from '../actions/game';
import { Game } from '../../shared/types/game';

const initialState: Game = {
	id: "",
	currentTurn: 0,
	maxTurns: 0,
	turnsLeft: 0,
    createdAt: "",
    updatedAt: ""
};

export const gameboard = (state = initialState, action: GameActions) => {
    const { type, payload } = action;
    
	switch (type) {
		case GameActionTypes.CREATE_GAME:
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
