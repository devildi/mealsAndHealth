import * as constants from './constants';

export const changeTab = (current) => ({
	type: constants.CHANGE_TAB,
	current: current
});