import { ActionTypes, EnemyActions } from '../actions/types';
import { Enemy } from '../../shared/types/enemy';

const initialState: Enemy = {
	id: "",
    hp: 0,
    maxHp: 0,
    shield: 0,
    name: "",
    image: "",
    createdAt: "",
    updatedAt: "",
    gameId: ""
};

export const enemy = (state = initialState, action: EnemyActions): Enemy => {
    const { type, payload } = action;
    
	switch (type) {
		case ActionTypes.CREATE_ENEMY:
            const { id, hp, maxHp, name, image, createdAt, updatedAt, gameId } = payload;

            return {
                ...state,
                id,
                hp,
                maxHp,
                name,
                image,
                createdAt,
                updatedAt,
                gameId
            };

		default:
			return state;
	}
};
