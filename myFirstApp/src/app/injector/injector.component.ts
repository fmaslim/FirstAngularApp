import { Component, OnInit } from '@angular/core';
import { ReflectiveInjector, InjectionToken, Inject } from '@angular/core';

export class MandrillService {}
export class SendGridService {}

let injector = ReflectiveInjector.resolveAndCreate([
  MandrillService, SendGridService
]);

let emailService = injector.get(MandrillService);
console.log(emailService);

// Dependency caching
// Multiple calls to the same injector for the same token will return the same instance
const emailService1 = injector.get(MandrillService);
const emailService2 = injector.get(MandrillService);
console.log(emailService1 === emailService2); // true

// A different injector for the same token might return a different instance of a dependency
// but the same injector will always return the same instance.
emailService1.foo = 'moo';
console.log(emailService2.foo); // moo

// Child injectors
// These injectors behave like a regular injector, with a few additions
// A. Each injector creates its own instance of a dependency
// B. Child injectors forward requests to their parent inject if they can't resolve the token locally

// To configure a provider so that it returns different dependency, use the same token and different dependency class, like so:
let injector2 = ReflectiveInjector.resolveAndCreate([{
  provide: 'EmailService', useClass: MandrillService
  }]);
// To get a different dependency, use the same token, but return a different dependency
injector2 = ReflectiveInjector.resolveAndCreate([{
  provide: 'EmailService', useClass: SendGridService
}]);

// Now, call "get" to get an instance of the dependecy, by passing in the token
emailService = injector2.get('EmailService');

// The above "useClass" dependency is only 1 way to configure ReflectiveInjector
// { provide: "", useClass: className }
// There are 3 other ways:
// A. UseExisting -
// { provide: GenericEmailService, useClass: GenericEmailService }
// { provide: MandrillService, useExisting: GenericEmailService }
// { provide: SendGridService, useExisting: GenericEmailService }

// These providers return the same instance of GenericEmailService

// B. value
injector = ReflectiveInjector.resolveAndCreate([{
  provide: 'APIKey', useValue: '123456XYZ'
}]);
const apiKey = injector.get('APIKey');

// Or, we can also pass an object
injector = ReflectiveInjector.resolveAndCreate([{
  provide: 'Config',
  useValue: Object.freeze({ // this makes the properties and values read-only
    'APIKey': '123456ABCXYZ',
    'APISecret': '123-456-7890'
  })
}]);
const config = injector.get('Config');
// console.log(config.APIKey);
// console.log(config.APISecret);

// C. useFactory
// The provider can also be configured to call a function every time a token is required, leaving it
// to the provider to figure out what to return.
const isProd = true;
injector = ReflectiveInjector.resolveAndCreate([{
  provide: 'EmailService',
  useFactory: () => {
    return isProd ? new MandrillService() : new SendGridService();
  }
}]);

emailService = injector.get('EmailService');
console.log(emailService);

// Token can be done in 3 ways: a string token, a type/class token, or an injection token
const EmailService = new InjectionToken('EmailService');
injector = ReflectiveInjector.resolveAndCreate([{
  provide: EmailService, useClass: SendGridService
}]);

emailService = injector.get(EmailService);
console.log(emailService);

// Using Dependency Injection (DI) in Angular
// When Angular creates a component, it uses the DI framework to figure out what to pass to the component
// class constructor as parameters
// However, we may need to give Angular some hints by using either the @Inject or @Injectable decorators.
export class OtherService {
  constructor() { }
}

export class SimpleService {
  otherService: OtherService;

  // This doesn't work. We need to explicitly tell Angular what we want injected for the otherService parameter
  // constructor(otherService: OtherService) {
  //   this.otherService = otherService;
  //  }

  // So use an @Inject decorator like so
  constructor(@Inject(OtherService)otherservice: OtherService) {
    this.otherService = otherservice;
  }
  // If there are multiple parameters that need to be decorated with @Inject,
  // there is a better way to do it, by marking the class with @Injectable
}

// ViewProvider creates a special injector that resolves dependencies only for THIS component's view children, and doesn't act as a parent
@Component({
  selector: 'app-injector',
  templateUrl: './injector.component.html',
  styleUrls: ['./injector.component.css'],
  providers: [MandrillService, SendGridService], // Configured to use these classes as providers
  viewProviders: [MandrillService] // See comments above
})
export class InjectorComponent implements OnInit {

  // This makes Angular resolve and create a SimpleService by requesting it from the parent NgModule
  constructor(private simpleService: SimpleService) { }

  ngOnInit() {
  }

}
