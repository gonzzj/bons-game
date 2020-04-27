import { IStore } from '../Store';

export const selectEnemyId = (state: IStore) => state.enemy.id;