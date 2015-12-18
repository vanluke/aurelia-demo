import {inject} from 'aurelia-framework';
import $ from 'jquery';
import {NewsRepository} from './services/newsRepository';

@inject(NewsRepository)
export class TeamNews {
	constructor (newsRepository) {
		this.newsRepository = newsRepository;
	}

	attached () {
		this.getNews();
	}

	getNews () {
		this.newsRepository.getNews ()
			.then(n => {
				this.news = n;
			}).catch(e => {
				console.error(e);
			});
	}

	select (article) {
		this.article = article;
	}

	news;
}