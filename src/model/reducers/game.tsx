import { ActionTypes, GameActions } from '../actions/types';
import { Game } from '../../shared/types/game';

const initialState: Game = {
	id: "",
	currentTurn: 0,
	maxTurns: 0,
	turnsLeft: 0,
    createdAt: "",
	updatedAt: "",
	loading: false
};

export const gameboard = (state = initialState, action: GameActions): Game => {
	switch (action.type) {
		case ActionTypes.CREATE_GAME:
            const {id, currentTurn, maxTurns, turnsLeft, createdAt, updatedAt} = action.payload;

			return {
				...state,
				id,
				currentTurn,
				maxTurns,
				turnsLeft,
				createdAt,
				updatedAt
			};

		case ActionTypes.END_TURN:
			const game = action.payload.game;

			return {
				...state,
				currentTurn: game.currentTurn,
				turnsLeft: game.turnsLeft,
				updatedAt: game.updatedAt
			}

		case ActionTypes.SET_LOADING:
			return {
				...state,
				loading: action.payload
			}
			
		default:
			return state;
	}
};
