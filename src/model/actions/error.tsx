import { ActionTypes } from './types';

export const setError = (error: Response, status: number) => {
    return {
        type: ActionTypes.SET_ERROR,
        payload: {
            error,
            status
        }
    };
};