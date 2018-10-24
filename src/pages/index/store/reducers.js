import * as constants from './constants'

const defaultState = {
	current: 0
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_TAB:
			return {...state, current: action.current};
		default:
			return state;
	}
}