import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  doGetText: string;
  doPostText: string;
  doDeleteText: string;
  doPutText: string;

  doGETasPromiseText: string;
  doGETasPromiseErrorText: string;
  doGETasObservableErrorText: string;
  doGETWithHeadersText: string;

  doGEToniTunesText: string;

  apiRoot = 'http://httpbin.org';
  constructor(private http: Http) { }

  ngOnInit() {
  }

  doGEToniTunes() {
    const url = `https://itunes.apple.com/search`;
    const params = new URLSearchParams();
    params.set('term', 'maroon 5');
    params.set('collectionName', 'Songs About Jane');
    params.set('limit', '10');
    this.http.get(url, {params}).toPromise().then(response => this.doGEToniTunesText = response.json());
  }

  // To perform a GET request, call the get function on our HTTP client.
  // This returns an observable. For now, subscribe to it and print out the response
  doGET() {
    // this.doGetText = 'doGET is clicked. This comes from the component (code-behind)';
    const url = `${this.apiRoot}/get`;
    const params = new URLSearchParams();
    params.set('foo', 'moo');
    params.set('limit', '25');
    this.http.get(url, {params}).subscribe(response => this.doGetText = response.json());
  }

  // To perform a POST request, call the POST function on our HTTP client
  // The second parameter is not a set of query parameters, but instead an object.
  doPOST() {
    // this.doPostText = 'doPOST is clicked. Hello POST!';
    const url = `${this.apiRoot}/post`;
    const payload = { foo: 'foo', moo: 'moo' };
    const params = new URLSearchParams();
    params.set('limit', '25');
    this.http.post(url, {payload}, {params}).subscribe(response => this.doPostText = response.text());
  }

  // DELETE request is the same as GET. The format is exactly the same as GET
  doDELETE() {
    // this.doDeleteText = 'Hi, DELETE!';

    const url = `${this.apiRoot}/delete`;
    const params = new URLSearchParams();
    params.set('foo', 'moo');
    params.set('limit', '25');
    this.http.delete(url, {params}).subscribe(response => this.doDeleteText = response.text());
  }

  // To perform a PUT  request, just call the PUT function on our HTTP client
  // Works exactly the same as POST
  doPUT() {
    // this.doPutText = 'Man, PUT wants in on the action too!';
    const url = `${this.apiRoot}/put`;
    const payload = { foo: 'foo', moo: 'moo'};
    const params = { 'limit': '25' };
    this.http.put(url, {payload}, {params}).subscribe(response => this.doPutText = response.text());
  }

  // To use Promise, instead of Observable, call toPromise() after an observable is returned.
  // toPromise is an operator. We need to explicitly import each operator we want to use
  // import 'rxjs/add/operator/toPromise'
  doGETasPromise() {
    // this.doGETasPromiseText = 'Seriously? GET can make promises too?!';
    const url = `${this.apiRoot}/get`;
    const params = new URLSearchParams();
    params.set('foo', 'foo');
    params.set('moo', 'moo');
    params.set('limit', '25');
    this.http.get(url, {params}).toPromise().then(response => this.doGETasPromiseText = response.text());
  }

  // One way to handle errors is to send a POST request, but by calling a GET method.
  doGETasPromiseError() {
    // this.doGETasPromiseErrorText = 'LOL! When you promise a lot, you are bound to make some errors';
    const url = `${this.apiRoot}/post`;
    const payload = { foo: 'foo', moo: 'moo'};
    const params = new URLSearchParams();
    params.set('limit', '25');
    this.http.get(url, {params}).subscribe(response => this.doGETasPromiseErrorText = response.text(),
    msg => this.doGETasPromiseErrorText = msg);
    // msg => this.doGETasPromiseErrorText = `${msg.status}` + '. ' + `${msg.statusText}`);
  }

  // Add a 2nd param after in the "then" call
  doGETasObservableError() {
    // this.doGETasObservableErrorText = 'What the! Get can also observe errors now? What has the world come to?';
    const url = `${this.apiRoot}/post`;
    const payload = { foo: 'foo', moo: 'moo'};
    const params = new URLSearchParams();
    params.set('limit', '25');
    this.http.get(url, {params}).toPromise().then(response => this.doGETasObservableErrorText = response.text(),
    msg => this.doGETasObservableErrorText = msg);
  }

  // To send headers with requests, import 2 helper classes from HTTP module
  // { Headers and RequestOptions }
  doGETWithHeaders() {
    // this.doGETWithHeadersText = 'Looks like GET can change request headers too!';

    // btoa converts a string to a base64
    const headers = new Headers();
    headers.append('Authorization', btoa('username:password'));
    const options = new RequestOptions();
    options.headers = headers;
    const url = `${this.apiRoot}/get`;
    this.http.get(url, options).subscribe(response => this.doGETWithHeadersText = response.text(),
    msg => this.doGETWithHeadersText = `${msg.status}` + '. ' + `${msg.statusText}`);
  }
}

