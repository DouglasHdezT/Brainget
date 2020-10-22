/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Convencon de uso
 * Years => 2020, de forma normal
 * Month - 0 - 12 => Enero = 0, Diciembre = 11
 * Day - 1 - 31 
 */

import Translation, {Keys} from '../translation/TranslationHelper';

export const getLastDayInMonth = (month, year) => {
	return new Date(year, month + 1, 0).getDate();
}

export const getPreviousMonth = (month, year) => {
	const date = new Date(year, month, 0);

    return {
		month: date.getMonth(),
		year: date.getFullYear(),
	}; 
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
	let period = 1;

	for ( let i = 0 ; i < periods ; i++ ) {
		if(day > limitBot && day <= limitTop){
			break;
		}
		limitBot += jump
		limitTop += jump
		limitTop = limitTop <= lastDay ? limitTop : lastDay;
		period ++;
	} 

	limitBot +=1;

	return {
		period: period,
		periods: periods,
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