import { ActionTypes, PlayerActions } from '../actions/types';
import { Player } from '../../shared/types/player';

const initialState: Player = {
	id: "",
    hp: 0,
    maxHp: 0,
    name: "",
    cards: [],
    createdAt: "",
    updatedAt: "",
    gameId: ""
};

export const player = (state = initialState, action: PlayerActions): Player => {
    const { type, payload } = action;
    
	switch (type) {
		case ActionTypes.CREATE_PLAYER:
            const { id, hp, maxHp, name, cards, createdAt, updatedAt, gameId } = payload;

            return {
                ...state,
                id,
                hp,
                maxHp,
                name,
                cards,
                createdAt,
                updatedAt,
                gameId
            };

		default:
			return state;
	}
};
