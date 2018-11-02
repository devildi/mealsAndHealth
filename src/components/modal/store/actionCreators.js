import * as constants from './constants';

export const openModal = (data) => ({
	type: constants.OPEN_MODAL,
	data: data
});

export const closeModal = () => ({
	type: constants.CLOSE_MODAL
});

export const changeContent = (data) => ({
	type: constants.CHANGE_CONTENT,
	data: data
});