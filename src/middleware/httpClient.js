import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

class ApplicationHttpClient extends HttpClient {
	constructor () {
		super();
		this.configure(config => {
	      config
	        .withBaseUrl('http://127.0.0.1:1337/api/v1/');
	    });
	}
}
export { ApplicationHttpClient }

