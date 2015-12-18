export class News {
	constructor (args) {
		this.guid = args.guid;
		this.isActive = args.isActive;
		this.picture = args.picture;
		this.author = args.author;
		this.company = args.company;
		this.address = args.address;
		this.about = args.about;
		this.description = args.description;
		this.published = args.published;
		this.tags = args.tags || [];
	}
}