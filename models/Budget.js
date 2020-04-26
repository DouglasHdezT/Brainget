import { dateInObject, getPeriodLimits } from '../utils/DateUtils'

export default class Budget {
	constructor(periods){
		const date = dateInObject();
		const {startDay, endDay} = getPeriodLimits(periods);

		this.createdAt = new Date().toLocaleDateString();
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
	}
}