import * as constants from './constants'

const defaultState = {
	breakfast: [],
	lunch: [],
	supper: [],
	dessert: [],
	status: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case constants.CHANGE_DATA:
			return { ...state,
				breakfast: [...action.data.breakfast],
				lunch: [...action.data.lunch],
				supper: [...action.data.supper],
				dessert: [...action.data.dessert],
				status: [...action.data.status]
			};
		default:
			return state;
	}
}