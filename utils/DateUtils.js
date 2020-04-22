/**
 * Convencon de uso
 * Years => 2020, de forma normal
 * Month - 0 - 12 => Enero = 0, Diciembre = 11
 * Day - 1 - 31 
 */

import Translate, {Keys} from '../translation/TranslationHelper';

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
			return Translation.getStringValue(Keys.january_month_text);
		case 1:
			return Translation.getStringValue(Keys.february_month_text);
		case 2:
			return Translation.getStringValue(Keys.march_month_text);
		case 3:
			return Translation.getStringValue(Keys.april_month_text);
		case 4:
			return Translation.getStringValue(Keys.may_month_text);
		case 5:
			return Translation.getStringValue(Keys.june_month_text);
		case 6:
			return Translation.getStringValue(Keys.july_month_text);
		case 7:
			return Translation.getStringValue(Keys.august_month_text);
		case 8:
			return Translation.getStringValue(Keys.september_month_text);
		case 9:
			return Translation.getStringValue(Keys.october_month_text);
		case 10:
			return Translation.getStringValue(Keys.november_month_text);
		case 11:
			return Translation.getStringValue(Keys.december_month_text);
		default:
			return "Not Defined";
	}
}