import { createSelector } from 'reselect';
import { IStore } from '../Store';
import { get } from 'lodash';
import Enemy from '../../shared/types/enemy';

export const selectEnemy = (state: IStore) => state.enemy;

export const selectEnemyId = createSelector(
    selectEnemy,
    (enemy: Enemy) => get(enemy, 'id', '')
);