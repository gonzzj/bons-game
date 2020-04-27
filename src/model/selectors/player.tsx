import { IStore } from '../Store';

export const selectPlayerId = (state: IStore) => state.player.id;