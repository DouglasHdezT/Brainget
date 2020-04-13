import { dateInObject, getPeriodLimits } from '../utils/DateUtils'

export default class Budget {
	constructor(periods){
		const date = dateInObject();
		const {startDay, endDay} = getPeriodLimits(periods);

		this.title = `${date.day}/${date.month}/${date.year}`;

		this.year = date.year;
		this.month = date.month;
		
		this.startDay = startDay;
		this.endDay = endDay;
		
		this.incomes = [];
		this.expenses = [];
	}
}