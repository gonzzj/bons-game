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

	switch (action.type) {
		case ActionTypes.GET_ENEMY:
            const { id, hp, maxHp, name, image, shield, createdAt, updatedAt, gameId } = action.payload;

            return {
                ...state,
                id,
                hp,
                maxHp,
                shield,
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
