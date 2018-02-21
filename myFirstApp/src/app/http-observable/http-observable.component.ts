import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchItem } from '../http-promise/http-promise.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class SearchService {
  apiRoot = 'https://iTunes.apple.com/search';

  constructor(private http: Http) {
  }

  // In this observable example, make the search function RETURN an observable
  // that the caller will subscribe to
  search(term: string): Observable<SearchItem[]> {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(url).map(response => { // map is an Observable operator, but to use it, import it from "add"
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

// By using Observable, both the component and the service are returning Observables.
// And they need to be linked in order for them to work properly
// The valueChanges call below is of type Observable<string>, and it needs to be changed to Observable<SearchItem[]>
// To do that, use a chain of operators.

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.css'],
  providers: [SearchService]
})
export class HttpObservableComponent implements OnInit {
  searchText: string;
  loading = false;
  // 1. See below - declaring this as an array is only used for storing the results locally
  // results = [];

  // 2. Instead, use a variable of type Observable (of type SearchItem array)
  results: Observable<SearchItem[]>;

  searchItems: SearchItem[];
  searchField: FormControl;

  constructor(public iTunesSearch: SearchService) { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .switchMap(term => this.iTunesSearch.search(term))
                        .do(() => this.loading = false);
  }

  doSearch(keyword: string) {
    this.loading = true;
    // 1. This subscribes to the Observable and stores the results locally on the component
    // this.iTunesSearch.search(keyword).subscribe(data => {
    //   this.loading = false;
    //   this.results = data;
    // });

    // 2. Instead of doing #1, use async pipe so results stores the Observable itself and not the array of SearchItems
    this.iTunesSearch.search(keyword);
  }
}
