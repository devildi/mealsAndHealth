import * as constants from './constants';

export const openToast = (data) => ({
	type: constants.OPEN_TOAST,
	data: data
});

export const closeToast = () => ({
	type: constants.CLOSE_TOAST
});