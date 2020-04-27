import { Effect } from './effect';

export interface Card {
    id: string,
    value: number,
    effect: Effect,
    createdAt: string,
    updatedAt: string
}