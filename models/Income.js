export default class Income {
	constructor (title, money) {
		this.createdAt = new Date();

		this.money = parseFloat(money);
		this.title = title;
	}
}