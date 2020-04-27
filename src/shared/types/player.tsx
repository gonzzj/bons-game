import { Card } from './card';

export interface Player {
    id: string,
    hp: number,
    maxHp: number,
    name: string,
    cards: Card[], 
    createdAt: string,
    updatedAt: string,
    gameId: string
}