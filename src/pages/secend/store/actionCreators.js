import * as constants from './constants';
import { fromJS } from 'immutable';

export const changeDate = (date) => ({
	type: constants.CHANGE_DATE,
	date: date
});