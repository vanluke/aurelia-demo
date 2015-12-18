import {inject, bindable} from 'aurelia-framework';

export class NewsArticle {
	toggle () {
		this.articleClicked = !this.articleClicked;
	}
	articleClicked;
	@bindable article;
}