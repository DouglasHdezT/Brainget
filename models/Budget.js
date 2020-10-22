/*
	Copyright 2020 Douglas Hernández

	Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

import { dateInObject, getPeriodLimits } from '../utils/DateUtils'

export default class Budget {
	constructor(periods){
		const date = dateInObject();
		const {startDay, endDay} = getPeriodLimits(periods);

		this.createdAt = new Date().getTime();
		this.title = `${date.day}/${date.month}/${date.year}`;

		this.year = date.year;
		this.month = date.month;
		
		this.startDay = startDay;
		this.endDay = endDay;
		
		this.incomes = [];
		this.expenses = [];

		this.totalIncome = 0;
		this.totalCosts = 0;
		this.currentBalance = 0;

		this.question1 = 0;
		this.question2 = 0;
		this.question3 = 0;

		this.period = 1;
		this.periods = 1;
	}
}