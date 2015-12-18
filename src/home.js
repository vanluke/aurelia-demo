import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Home {
	constructor (router) {
		this.router = router;
	}
	get message () {
		return 'hello';
	}
}