import * as constants from './constants';

const defaultState = {
	dateSel: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DATE:
			return {...state, 'dateSel': action.date};
		default:
			return state;
	}
}