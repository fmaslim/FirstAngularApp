import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ArtistTrackListComponent } from '../ArtistTrackList/ArtistTrackList.component';

// With Router Guards, we can prevent users from accessing areas that they're not allowed to access
// Or we can ask them for confirmation when leaving a certain area.

// There are 4 types of router guards:
// 1. CanActivate - Checks to see if a user can visit a route
// 2. CanActivateChild - Checks to see if a user can visit a route's children
// 3. CanDeactivate - Checks to see if a user can exit a route
// 4. Resolve - Performs route data retrieval before route activation

// These 4 types can be implemented as classes
// Or as services that need to be provided, so they can be created as Injectable
// They return either true if the user can access a route, or false if they can't

// They can also return Observable or Promise that later on resolves to a boolean in case the guard
// can't answer the question straight away.

// Type 1
@Injectable()
export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log('AlwaysAuthGuard');
    return true;
  }
}

// Type 2
@Injectable()
export class AlwaysAuthGuardChild implements CanActivateChild {
  canActivateChild() {
    console.log('AlwaysAuthGuardChild');
    return true;
  }
}

export class UserService {
  isLoggedIn(): boolean {
    return true;
  }
}

@Injectable()
export class OnlyLoggedInUserGuard implements CanActivate {

  constructor(private userService: UserService) {
  }

  canActivate() {
    console.log('OnlyLoggedInUserGuard');
    if (this.userService.isLoggedIn()) {
      return true;
    } else {
      window.alert('You do not have permission to view this page');
      return false;
    }
  }
}

export class OnlyUsedForDeactivate {
  canDeactivate() {
    return false;
  }
}

// Type 3
// CanDeactivate is usually used to check and see if there are any unsaved changes on the page
// and warn the user if there are
export class UnsavedChangesGuard implements CanDeactivate<ArtistTrackListComponent> {
  canDeactivate(component: ArtistTrackListComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
    console.log('UnsavedChangesGuard');
    console.log(route.params);
    console.log(state.url);
    console.log(typeof(component));

    return component.canDeactivate() || window.confirm('Are you sure?');
  }
}

@Component({
  selector: 'app-nav-router-guards',
  templateUrl: './nav-router-guards.component.html',
  styleUrls: ['./nav-router-guards.component.css']
})
export class NavRouterGuardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
