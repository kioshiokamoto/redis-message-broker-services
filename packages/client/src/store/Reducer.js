import { ACTIONS } from './Actions';

const reducers = (state, action) => {
	switch (action.type) {
		case ACTIONS.AUTH:
			return {
				...state,
				auth: action.payload,
			};
		case ACTIONS.AUTH_LOGING:
			return {
				...state,
				logged: true,
			};
		case ACTIONS.AUTH_LOGOUT:
			return {
				...state,
				logged: false,
			};
		default:
			return state;
	}
};

export default reducers;
