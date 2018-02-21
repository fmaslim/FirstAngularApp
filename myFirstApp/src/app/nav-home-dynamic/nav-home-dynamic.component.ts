import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-home-dynamic',
  templateUrl: './nav-home-dynamic.component.html',
  styleUrls: ['./nav-home-dynamic.component.css']
})
export class NavHomeDynamicComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // the value passed in is called "link params array"
  // No need to pass in the "#" sign in the parameter
  // The code automatically adds it to the path if using HashLocationStrategy

  goHome() {
    this.router.navigate(['']);
  }

  goJsonP() {
    this.router.navigate(['jsonp']);
  }

  goJoke() {
    this.router.navigate(['joke']);
  }

  goInjector() {
    this.router.navigate(['injector']);
  }

  goModelDriven() {
    this.router.navigate(['modeldriven']);
  }

  goTemplateDriven() {
    this.router.navigate(['templatedriven']);
  }

  goHttp() {
    this.router.navigate(['http']);
  }

  goHttpPromise() {
    this.router.navigate(['httppromise']);
  }
}
