import * as constants from './constants'

const defaultState = {
	content: '',
	isLoading: false,
	hasGOrD: [],
	overNight: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_CONTENTS:
			return { ...state,
				content: action.data
			};
		case constants.CHANGE_LOADING:
			return { ...state,
				isLoading: !state.isLoading
			};
		case constants.CHANGE_CITY_ARRAY:
			return {
				...state,
				hasGOrD: action.data[0],
				overNight: action.data[1]
			}
		default:
			return state;
	}
}