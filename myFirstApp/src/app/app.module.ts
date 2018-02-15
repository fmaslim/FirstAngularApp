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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
,
    JokeComponent,
    JokeFormComponent,
    JokeDirDirective
,
    RxObservableComponent,
    ModelDrivenFormComponent,
],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // this needs to be imported here, before Form can recognize [FormGroup] directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
