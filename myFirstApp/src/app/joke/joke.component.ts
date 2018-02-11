import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export class Joke {
  UserID: string;
  Username: string;
  Hide: boolean;

  constructor (userid: string, username: string) {
    this.UserID = userid;
    this.Username = username;
    this.Hide = false;
  }

  toggle() {
    this.Hide = !this.Hide;
  }
}

// ViewEncapsulation allows us to set the style of a component without it leaking outside the scope of the component
// 3 enum values:
// ViewEncapsulation.Native
// ViewEncapsulation.Emulated -- default value.
// ViewEncapsulation.None

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeComponent implements OnInit {
  @Input() data: Joke;

  constructor() {
  }

  ngOnInit() {
    this.data = new Joke('New Joke', 'Created OnInit');
  }
}
