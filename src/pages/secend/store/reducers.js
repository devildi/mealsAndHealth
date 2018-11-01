import * as constants from './constants';

const defaultState = {
	dateSel: '',
	breakfast: [],
	lunch: [],
	supper: [],
	dessert: [],
	status: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DATE:
			return action.date ? {...state, 'dateSel': action.date} : {...state, 'dateSel': ''}
		case constants.INISTIAL_DATA:
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