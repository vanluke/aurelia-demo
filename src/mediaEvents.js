import {VideoRepository} from './services/videoRepository';
import {inject} from 'aurelia-framework';

@inject(VideoRepository)
export class MediaEvents {
	constructor (videoRepository) {
		this.videoRepository = videoRepository;
	}

	bind () {
		this.videoRepository.getVideos()
			.then (v => {
				this.videos = v;
			});
	}

	attached () {
		
	}

	videos = [];
}