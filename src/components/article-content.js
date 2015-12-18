import {inject, bindable} from 'aurelia-framework';
import {ObserverLocator} from 'aurelia-binding'; 

@inject(ObserverLocator)
export class ArticleContent {
	constructor(observerLocator) {
		this.observerLocator = observerLocator;
	}
	
	hide () {
		this.visibility = false;
	}

	bind () {
		console.log('bind');
	}

	// createSubscription () {
	// 	this.observerLocator
 //          .getObserver(this, 'article')
 //          .subscribe((value, oldValue) => {
 //          		console.log('up');
 //                this.visibility = !this.visibility;
 //          });
	// }

	  @bindable article;
	 @bindable visibility = false;
}