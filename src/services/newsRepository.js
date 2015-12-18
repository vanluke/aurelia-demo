import {News} from './../models/news';
import {inject} from 'aurelia-framework';
import {ApplicationHttpClient} from './../middleware/httpClient';

@inject (ApplicationHttpClient)
export class NewsRepository {
  constructor (httpClient) {
    this.httpClient = httpClient;
  }

	getNews () {
    return this.httpClient.fetch('news')
        .then(response => response.json())
        .then (newsResponse => {
            if (newsResponse.response 
              && newsResponse.response.length > 0) {
              return newsResponse.response.map ((n) => { return new News (n) });
            }
            return [];
        });
	}
}