export default class Cost {
	constructor (title, money, TAG) {
		this.createdAt = new Date();

		this.money = parseFloat(money);
		this.title = title;
		this.TAG = TAG;
	}
}