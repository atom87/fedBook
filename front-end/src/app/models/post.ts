export class Post {
	_id: number;
	text: string;
	user: Object;
	date: string;

	constructor(obj?: any) {
		this._id = obj && obj._id || null;
		this.text = obj && obj.text || null;
		this.user = obj && obj.user || {};
		this.date = obj && obj.date || null;
	}
}
