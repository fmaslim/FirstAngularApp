import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Injectors can be configured in 3 different ways:
// A. On NgModule
// B. On Components and Directives
// C. On Components via viewProviders

// Understanding WHERE to configure the provider is a key piece of understanding HOW to architect the application

export class SimpleProviderService {
  value: string;
}

@Component({
  selector: 'app-injector-provider',
  templateUrl: './injector-provider.component.html',
  styleUrls: ['./injector-provider.component.css']
})
export class InjectorProviderComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-injector-provider-child',
  template: `
    <div class="child">
      <p>Child</p>
      {{ service.value }}
    </div>
  `
})
export class ChildComponent implements OnInit {

  constructor (public service: SimpleProviderService) { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-injector-provider-parent',
  template: `
      <div class="parent">
        <p>Parent</p>
        <form novalidate>
          <div class="form-group">
            <input type="text"
                   class="form-control"
                   name="value"
                   [(ngModel)]="service.value">
          </div>
        </form>
        <ng-content></ng-content>
      </div>
    `,
    viewProviders: [SimpleProviderService]
    // By using ViewProviders, it creates an injector which is only used by this component
    // and any view children.
    // That is the difference between content (providers) and view children (view providers).
    // For a content child, it uses the injector from NgModule
})
export class ParentComponent implements OnInit {

  constructor (public service: SimpleProviderService) {  }

  ngOnInit() {

  }
}
