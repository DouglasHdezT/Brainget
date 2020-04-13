/**
 * Convencon de uso
 * Years => 2020, de forma normal
 * Month - 0 - 12 => Enero = 0, Diciembre = 11
 * Day - 1 - 31 
 */

export const getLastDayInMonth = (month, year) => {
	return new Date(year, month + 1, 0).getDate();
}

export const dateInObject = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return { day, month, year };
}

export const getPeriodLimits = (periods) => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	const lastDay = getLastDayInMonth(month, year);

	const jump = Math.ceil(lastDay / periods);

	let limitBot = 0
	let limitTop = limitBot + jump;

	for ( let i = 0 ; i < periods ; i++ ) {
		if(day > limitBot && day <= limitTop){
			break;
		}
		limitBot += jump
		limitTop += jump
		limitTop = limitTop <= lastDay ? limitTop : lastDay;

	} 

	limitBot +=1;

	return {
		startDay: limitBot,
		endDay: limitTop
	}
}