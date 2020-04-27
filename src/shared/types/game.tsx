
import { Player } from './player';
import { Enemy } from './enemy';

export interface Game {
    id: string,
    currentTurn: number,
    maxTurns: number,
    turnsLeft: number,
    player?: Player,
    enemy?: Enemy
    createdAt: string,
    updatedAt: string,
    gameLoading: boolean,
    turnLoading: boolean
}