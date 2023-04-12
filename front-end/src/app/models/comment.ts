export class Comment {
	_id: number;
	posts: number;
	user: Object;
	text: string;
	date: string;

	constructor(obj?: any) {
		this._id = obj && obj._id || null;
		this.posts = obj && obj.posts || null;
		this.user = obj && obj.user || {};
		this.text = obj && obj.text || null;
		this.date = obj && obj.date || null;
	}
}


