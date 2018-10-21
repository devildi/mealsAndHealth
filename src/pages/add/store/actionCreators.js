import * as constants from './constants';
import { fromJS } from 'immutable';

export const pickBigItem = (obj) => ({
	type: constants.PICK_BIG,
	date: obj
})

export const pickSmallItem = (obj) => ({
	type: constants.PICK_BIG,
	date: obj
});