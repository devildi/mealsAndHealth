import * as constants from './constants';

export const changeDate = (date) => ({
	type: constants.CHANGE_DATE,
	date: date
});