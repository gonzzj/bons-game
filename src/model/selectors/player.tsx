import { createSelector } from 'reselect';
import { IStore } from '../Store';
import { get } from 'lodash';
import Player from '../../shared/types/player';

export const selectPlayer = (state: IStore) => state.player;

export const selectPlayerId = createSelector(
    selectPlayer,
    (player: Player) => get(player, 'id', '')
);