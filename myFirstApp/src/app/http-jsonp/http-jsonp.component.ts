import { Component, OnInit, Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { SearchItem } from '../http-promise/http-promise.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

// JSONP is a method of performing API requests that works around the issue of CORS
// Unless an API sets certain headers in the response, a browser will reject it.
// JSONP treats the API as if it is a javascript file. It dynamically adds the URL as if
// it were a script tag

// API that supports JSONP return something that looks like javascript. For example, it might return
// process_response({hello: 'world'});

// JSONP can only be used when:
// 1. The API itself supports JSONP. It needs to return the JSON response wrapped in a function
//    and it usually lets the caller pass in the function name.
// 2. It can only be used with GET requests. No POST/PUT/DELETE and so on.

@Injectable()
export class SearchService {
  apiRoot = 'https://itunes.apple.com/search';

  constructor(private jsonp: Jsonp) { // Here, we are using JSONP, instead of HTTP
  }

  search(term: string) {
    const url = `${this.apiRoot}/term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(url).map(response => {
      return response.json().results.map(item => {
        return new SearchItem(item.trackName
                            , item.artistName
                            , item.trackViewUrl
                            , item.artworkUrl30
                            , item.artistId);
      });
    });
  }
}

@Component({
  selector: 'app-http-jsonp',
  templateUrl: './http-jsonp.component.html',
  styleUrls: ['./http-jsonp.component.css'],
  providers: [SearchService]
})
export class HttpJsonpComponent implements OnInit {
  searchField: FormControl;
  loading: boolean;
  results: Observable<SearchItem[]>;

  constructor(public iTunesSearch: SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
                                  .debounceTime(400)
                                  .distinctUntilChanged()
                                  .do(() => this.loading = true)
                                  .switchMap(term => this.iTunesSearch.search(term))
                                  .do(() => this.loading = false);
  }

}
