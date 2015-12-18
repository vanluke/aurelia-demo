export class Video {
	constructor (args) {
		this.title = args.title;
		this.description = args.description;
		this.url = `http://www.youtubeinmp4.com/redirect.php?video=${args.resourceId.videoId}`;
		this.objectSrc = `http://www.youtube.com/v/${args.resourceId.videoId}?version=3&autoplay=1`;
		this.iframeSrc = `http://www.youtube.com/embed/${args.resourceId.videoId}`;
		this.channelTitle = args.channelTitle;
		this.publishedAt = args.publishedAt;
	}
}