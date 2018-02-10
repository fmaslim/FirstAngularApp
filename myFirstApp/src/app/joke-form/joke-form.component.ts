import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  constructor() { }

  ngOnInit() {
  }

  createJoke() {
    this.jokeCreated.emit(new Joke('Blah', 'Blah from inside joke-form component'));
  }
}
