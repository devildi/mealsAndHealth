import * as constants from './constants';
import { fromJS } from 'immutable';

export const pickBigItem = (obj, s) => ({
	type: constants.PICK_BIG,
	data: obj,
	flag: s
})

export const saveItem = (obj) => ({
	type: SAVE_ITEM
})