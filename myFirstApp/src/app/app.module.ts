import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeDirDirective } from './Directives/jokeDir.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
,
    JokeComponent,
    JokeFormComponent,
    JokeDirDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
