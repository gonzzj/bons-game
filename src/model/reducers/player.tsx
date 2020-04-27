import { ActionTypes, PlayerActions } from '../actions/types';
import { Player } from '../../shared/types/player';
import { Card } from '../../shared/types/card';
import { Effect } from '../../shared/types/effect';

const initialState: Player = {
	id: "",
    hp: 0,
    maxHp: 0,
    shield: 0,
    name: "",
    cards: [],
    createdAt: "",
    updatedAt: "",
    gameId: ""
};

export const player = (state = initialState, action: PlayerActions): Player => {
    
	switch (action.type) {
		case ActionTypes.CREATE_PLAYER:
            const { id, hp, maxHp, name, createdAt, updatedAt, gameId }: Player = action.payload;

            return {
                ...state,
                id,
                hp,
                maxHp,
                name,
                createdAt,
                updatedAt,
                gameId
            };

        case ActionTypes.GET_CARDS: 
            let cards: Card[] = action.payload;
            
            cards.forEach(card => {
                switch(card.effect) {
                    case Effect.DAMAGE:
                        card.image = "https://www.hellenic-art.com/images/thumbnails/635/487/detailed/7/macedonian-sword.png";
                        break;
                    case Effect.HEAL:
                        card.image = "https://lh3.googleusercontent.com/proxy/_wRGwxhch2bAZGYI-k-fi8A4cDzyTNSqk6rC0ElDUOsRTepl4obeJNc5h48m-fmIlU1RGJkrlV4VX6CIOwBEAigvFL4Vg5T6xDJqkXJxVyo2tI0"
                        break;
                    case Effect.SHIELD:
                        card.image = "https://www.alsterlegal.com/wp-content/uploads/2017/05/medieval-crusader-metal-shield.jpg";
                }
            });
        
            return {
                ...state,
                cards: action.payload
            };
		default:
			return state;
	}
};
