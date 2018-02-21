import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Decorate the class with Injectable so Angular knows it should inject the HTTP service
// into the constructor
@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;
  iTunesApiText: string;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
  }

  search(term: string) {
    // This function is going to make an asynchronous call using the http client lib
    // to the iTunes API
    // There are 2 ways to do that: Promises and Observables.

    const promise = new Promise((resolve, reject) => {
      // When the HTTP response comes back from the iTunes API, do processing and call
      // resolve() function. This lets any interested parties know that the async task
      // is complete and let them perform the next tasks.

      // If the HTTP response returns an error, call the reject() function which
      // again lets any interested parties know there was an error.

      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL).toPromise().then(response => {
        // Success
        this.iTunesApiText = response.json().resultCount;
        this.results = response.json().results.map(item => {
          return new SearchItem(item.trackName
                              , item.artistName
                              , item.trackViewUrl
                              , item.artworkUrl30
                              , item.artistId);
        });
        // this.results = response.json().results;
        resolve();
      },
        msg => {
          reject(msg);
      });
    });

    return promise;
  }
}

export class SearchItem {
  constructor(public name: string
            , public artist: string
            , public link: string
            , public thumbnail: string
            , public artistID: string) {

  }
}

@Component({
  selector: 'app-http-promise',
  templateUrl: './http-promise.component.html',
  styleUrls: ['./http-promise.component.css'],
  providers: [SearchService]
})
export class HttpPromiseComponent implements OnInit {
  searchText: string;
  loading = false;

  constructor(public iTunesSearch: SearchService) { }

  ngOnInit() {
  }

  doSearch(keyword: string) {
    // const result = this.iTunesSearch.search(keyword).resultCount);
    this.loading = true;
    this.iTunesSearch.search(keyword).then(() => this.loading = false);
    this.searchText = keyword;
  }
}
