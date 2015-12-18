import {ApplicationHttpClient} from './../middleware/httpClient';
import {inject} from 'aurelia-framework';
import {Video} from './../models/video';

@inject(ApplicationHttpClient)
export class VideoRepository {
	constructor (http) {
		this.http = http;
	}

	getVideos () {
		return this.http.fetch('videos')
	      .then(response => response.json())
	      .then (resp => {
	      		let youtubeResponse = JSON.parse(resp.response);
	      		if (youtubeResponse 
	      			&& youtubeResponse.items 
	      			&& youtubeResponse.items.length > 0) {
	      			return youtubeResponse.items.map ((i) => { return new Video (i.snippet) });
	      		}
	      		return [];
	      });
	}
} 