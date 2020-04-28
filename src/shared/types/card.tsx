import { Effect } from './effect';

export default interface Card {
    id: string,
    value: number,
    effect: Effect,
    image: string,
    createdAt?: string,
    updatedAt?: string
}