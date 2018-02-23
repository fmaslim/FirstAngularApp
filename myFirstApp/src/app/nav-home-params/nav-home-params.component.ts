import { Component, OnInit } from '@angular/core';
import { SearchService } from '../http-promise/http-promise.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-home-params',
  templateUrl: './nav-home-params.component.html',
  styleUrls: ['./nav-home-params.component.css'],
  providers: [SearchService]
})
export class NavHomeParamsComponent implements OnInit {

  constructor(private iTunesSearch: SearchService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.iTunesSearch.search(params['term']));
  }

  ngOnInit() {
  }

}
