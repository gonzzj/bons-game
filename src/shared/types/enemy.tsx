import { Effect } from './effect';

export default interface Enemy {
    id: string,
    hp: number,
    maxHp: number,
    shield: number,
    name: string,
    effect: {
        name: Effect,
        value: number
    },
    image: string
    createdAt: string,
    updatedAt: string,
    gameId: string
}