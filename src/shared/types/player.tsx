import { Card } from './card';
import { Effect } from './effect';

export interface Player {
    id: string,
    hp: number,
    maxHp: number,
    name: string,
    horror: boolean,
    effect?: {
        name: Effect | undefined,
        value: number | undefined
    },
    shield: number,
    cards: Card[], 
    createdAt: string,
    updatedAt: string,
    gameId: string,
    cardSelected: string
}