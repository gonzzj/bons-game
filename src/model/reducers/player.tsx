import { ActionTypes, PlayerActions } from '../actions/types';
import { Player } from '../../shared/types/player';
import { Card } from '../../shared/types/card';
import { Effect } from '../../shared/types/effect';

const initialState: Player = {
	id: "",
    hp: 0,
    maxHp: 0,
    shield: 0,
    horror: false,
    name: "",
    cards: [{
        id: "000",
        value: 0,
        effect: Effect.DAMAGE,
        image: ""
    },
    {
        id: "001",
        value: 0,
        effect: Effect.DAMAGE,
        image: ""
    },
    {
        id: "002",
        value: 0,
        effect: Effect.DAMAGE,
        image: ""
    }],
    createdAt: "",
    updatedAt: "",
    gameId: "",
    cardSelected: ""
};

export const player = (state = initialState, action: PlayerActions): Player => {
    
	switch (action.type) {
		case ActionTypes.GET_PLAYER:
            const { id, hp, maxHp, name, shield, createdAt, updatedAt, gameId }: Player = action.payload;

            return {
                ...state,
                id,
                hp,
                maxHp,
                name,
                shield,
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
                        card.image = "https://i.pinimg.com/originals/40/ed/8e/40ed8e381cf0876d77b540144c1247e0.png"
                        break;
                    case Effect.SHIELD:
                        card.image = "https://www.alsterlegal.com/wp-content/uploads/2017/05/medieval-crusader-metal-shield.jpg";
                }
            });
        
            return {
                ...state,
                cards: action.payload
            };

        case ActionTypes.SELECT_CARD:
            const card = action.payload === state.cardSelected ? '' : action.payload;

            return {
                ...state,
                cardSelected: card
            }

        case ActionTypes.END_TURN:
            const monsterEffect = action.payload.monsterEffect;

            return {
                ...state,
                horror: monsterEffect.effect === Effect.HORROR,
                cardSelected: ""
            }

        case ActionTypes.END_GAME:
            return initialState

		default:
			return state;
	}
};
