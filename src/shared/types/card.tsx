import { Effect } from './effect';

export interface Card {
    id: string,
    value: number,
    effect: Effect,
    image: string,
    createdAt?: string,
    updatedAt?: string
}