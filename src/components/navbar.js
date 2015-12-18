import {inject, bindable} from 'aurelia-framework';
// import 'mareial-design-litle';
export class NavBar {
	@bindable router = undefined;
	get userName () {
		return 'Lukasz Gonciarz';
	}

	toggle () {
		this.isOpen = !this.isOpen;
	}
	
	isOpen = false;
}