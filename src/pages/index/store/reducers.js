import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	current: 0,
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_TAB:
			return state.set('current', action.current);
		default:
			return state;
	}
}