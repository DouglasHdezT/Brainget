export default class Cost {
	constructor (title, money, TAG, taxable) {
		this._id = `ID${new Date().getTime()}${Math.random()*100}`;
		this.createdAt = new Date().toLocaleDateString();

		this.money = parseFloat(money);
		this.title = title;
		this.TAG = TAG;
		this.taxable = taxable;
	}
}