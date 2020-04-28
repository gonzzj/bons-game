import { createSelector } from 'reselect';
import { IStore } from '../Store';
import { get } from 'lodash';
import Game from '../../shared/types/game';

export const selectGame = (state: IStore) => state.game;

export const selectGameId = createSelector(
    selectGame,
    (game: Game) => get(game, 'id', '')
);