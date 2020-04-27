import { Card } from './card';

export interface Player {
    id: string,
    hp: number,
    maxHp: number,
    name: string,
    shield: number,
    cards: Card[], 
    createdAt: string,
    updatedAt: string,
    gameId: string
}