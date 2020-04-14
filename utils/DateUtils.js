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

export const intToMonth = (month) => {
	switch(month){
		case 0:
			return "Enero";
		case 1:
			return "Febrero";
		case 2:
			return "Marzo";
		case 3:
			return "Abril";
		case 4:
			return "Mayo";
		case 5:
			return "Junio";
		case 6:
			return "Julio";
		case 7:
			return "Agosto";
		case 8:
			return "Septiembre";
		case 9:
			return "Octubre";
		case 10:
			return "Noviembre";
		case 11:
			return "Diciembre";
		default:
			return "Not Defined";
	}
}