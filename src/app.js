import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

inject(EventAggregator)
export class App {
	constructor (eventAggregator) {
		this.eventAggregator = eventAggregator;
	}

  configureRouter(config, router){
     config.title = 'lunch and learn';
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', name:'home',   moduleId: './home', nav: true, title: 'home' },
      { route: 'news',  name: 'news',  moduleId: './team-news', nav: true, title: 'news' },
      { route: 'media',  name: 'media',  moduleId: './mediaEvents', nav: true, title: 'media' }]);
    
    this.router = router;
  }
}
