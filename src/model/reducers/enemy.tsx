import { ActionTypes, EnemyActions } from '../actions/types';
import { Enemy } from '../../shared/types/enemy';
import { Effect } from '../../shared/types/effect';

const initialState: Enemy = {
	id: "",
    hp: 0,
    maxHp: 0,
    shield: 0,
    name: "",
    effect: {
        name: Effect.DAMAGE,
        value: 0
    },
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

        case ActionTypes.END_TURN:
            return {
                ...state,
                effect: {
                    name: action.payload.monsterEffect.effect,
                    value: action.payload.monsterEffect.value
                }
            }

        case ActionTypes.END_GAME:
            return initialState

		default:
			return state;
	}
};
