import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	dateSel: '',
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DATE:
			return state.set('dateSel', action.date);
		default:
			return state;
	}
}