import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// This links the form model in a component with the HTML template
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeDirDirective } from './Directives/jokeDir.directive';
import { RxObservableComponent } from './rx-observable/rx-observable.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { InjectorComponent, OtherService, SimpleService } from './injector/injector.component';
import { InjectorProviderComponent, ChildComponent, ParentComponent } from './injector-provider/injector-provider.component';
import { SimpleProviderService } from './injector-provider/injector-provider.component';
import { HttpComponent } from './http/http.component';
import { HttpModule } from '@angular/http';
import { HttpPromiseComponent, SearchService } from './http-promise/http-promise.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { HttpJsonpComponent } from './http-jsonp/http-jsonp.component';
import { Jsonp, JsonpModule, Response } from '@angular/http';
import { NavHomeComponent } from './nav-home/nav-home.component';

import { Routes, RouterModule } from '@angular/router';


// In order for Angular to display certain components based on the requested URL,
// set up the mapping of URLs to Components via Route Configuration
// which is an array like so:

const routes: Routes = [
  // For the special case of an empty URL, need to add pathMatch: 'full' property so Angular knows
  // it should be matching exactly the empty string and not the partially empty string
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: NavHomeComponent },
  { path: 'jsonp', redirectTo: 'httpjsonp' },
  { path: 'joke', component: JokeComponent },
  { path: 'injector', component: InjectorComponent },
  { path: 'modeldriven', component: ModelDrivenFormComponent },
  { path: 'templatedriven', component: TemplateDrivenFormComponent },
  { path: 'http', component: HttpComponent },
  { path: 'httppromise', component: HttpPromiseComponent },
  { path: 'httpjsonp', component: HttpJsonpComponent },
  // This is a catch-all route that gets directed to if there is no match for the requested route
  { path: '**', component: HeaderComponent }
];

// Then, install the routes by importing RouterModule.forRoot(routes) into NgModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JokeComponent,
    JokeFormComponent,
    JokeDirDirective,
    RxObservableComponent,
    ModelDrivenFormComponent,
    TemplateDrivenFormComponent,
    InjectorComponent,
    InjectorProviderComponent,
    ChildComponent,
    ParentComponent,
    HttpComponent,
    HttpPromiseComponent,
    HttpObservableComponent,
    HttpJsonpComponent,
    NavHomeComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // this needs to be imported here, before Form can recognize [FormGroup] directive
    FormsModule, // this needs to be imported here. Otherwise, the <form></form> tag will not be recognized.
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes, { useHash: true }) // useHash is for Path Location Strategies
  ],
  providers: [OtherService, SimpleService, SimpleProviderService],
  // these classes have to be imported in the import statement above

  bootstrap: [AppComponent]
})
export class AppModule { }
