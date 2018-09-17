import * as constants from './constants';
import { fromJS } from 'immutable';

export const changeTab = (current) => ({
	type: constants.CHANGE_TAB,
	current: current
});