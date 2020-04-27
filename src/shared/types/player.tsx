import { Card } from './card';

export interface Player {
    id: string,
    hp: number,
    maxHp: number,
    name: string,
    horror: boolean,
    shield: number,
    cards: Card[], 
    createdAt: string,
    updatedAt: string,
    gameId: string,
    cardSelected: string
}