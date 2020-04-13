export default class Income {
	constructor (title, money) {
		this._id = `ID${new Date().getTime()}${Math.random()*100}`;
		this.createdAt = new Date();

		this.money = parseFloat(money);
		this.title = title;
	}
}