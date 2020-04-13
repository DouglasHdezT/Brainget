export default class Cost {
	constructor (title, money, TAG) {
		this._id = `ID${new Date().getTime()}${Math.random()*100}`;
		this.createdAt = new Date();

		this.money = parseFloat(money);
		this.title = title;
		this.TAG = TAG;
	}
}