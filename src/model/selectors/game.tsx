import { IStore } from '../Store';

export const selectGameId = (state: IStore) => state.game.id;