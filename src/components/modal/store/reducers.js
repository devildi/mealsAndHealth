import * as constants from './constants'

const defaultState = {
	isOpened: false,
	title: '',
	content: ''
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.OPEN_MODAL:
			return {...state, isOpened: true, title: action.data.name, content: action.data.dis};
		case constants.CLOSE_MODAL:
			return {...state, isOpened: false};
		case constants.CHANGE_CONTENT:
			return {...state, content: action.data}
		default:
			return state;
	}
}