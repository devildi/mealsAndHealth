export const formatDate = (date) => {
	const year = date.getFullYear().toString()
	const month = convert((date.getMonth() + 1).toString())

	const day = convert(date.getDate().toString())


	return [year, month, day].join('-')
}

const convert = (str) => {
	const len = [...str].length
	if(len === 1){
		str = '0' + str
		return str 
	}
	return str
}