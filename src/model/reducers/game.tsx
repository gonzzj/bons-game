import { ActionTypes, GameActions } from '../actions/types';
import Game from '../../shared/types/game';

const initialState: Game = {
	id: "",
	currentTurn: 0,
	maxTurns: 0,
	turnsLeft: 0,
    createdAt: "",
	updatedAt: "",
	gameLoading: false,
	turnLoading: false,
	modalEffects: false
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

		case ActionTypes.SET_GAME_LOADING:
			return {
				...state,
				gameLoading: action.payload
			}

		case ActionTypes.SET_END_TURN_LOADING:
			return {
				...state,
				turnLoading: action.payload
			}

		case ActionTypes.SET_MODAL_EFFECTS:
			return {
				...state,
				modalEffects: action.payload
			}
	

		case ActionTypes.END_GAME:
			return initialState
			
		default:
			return state;
	}
};
