import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke/joke.component';

export class FakePerson {
  age: number;
  name: string;

  constructor (age: number, name: string) {
    this.age = age;
    this.name = name;
  }
}

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  // Example of NgIf
  // Difference between [hidden]='false' and ngIf='false' is [hidden] only hides the element, but it still exists in the page.
  // ngIf completely removes the element from the DOM
  people: FakePerson[] = [
    new FakePerson(10, 'Racami LLC'),
    new FakePerson(20, 'Google Inc'),
    new FakePerson(30, 'Yahoo Inc'),
    new FakePerson(40, 'Microsoft Inc'),
    new FakePerson(50, 'Facebook Inc'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

  createJoke() {
    this.jokeCreated.emit(new Joke('Blah', 'Blah from inside joke-form component'));
  }
}
