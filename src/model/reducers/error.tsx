import { ActionTypes, ErrorActions } from '../actions/types';
import { Error } from '../../shared/types/error';

const initialState: Error = {
    message: '',
    status: 0
};

export const error = (state = initialState, action: ErrorActions): Error => {

	switch (action.type) {
        case ActionTypes.SET_ERROR:
            const { error, status } = action.payload;

            return {
                ...state,
                message: error.statusText,
                status: status
            }

		default:
			return state;
	}
};
