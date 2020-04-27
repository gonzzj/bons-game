import { createSelector } from 'reselect';
import { Game } from '../../shared/types/game';
import { Player } from '../../shared/types/player';
import { Enemy } from '../../shared/types/enemy';
import { IStore } from '../Store';

export const selectGameId = (state: IStore) => state.game.id;

const selectGamePlayer = (state: Game) => state.player;

const selectGameEnemy = (state: Game) => state.enemy;