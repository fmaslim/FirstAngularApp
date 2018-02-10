import { Component, OnInit, Input } from '@angular/core';

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

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  @Input() data: Joke;

  constructor() {
  }

  ngOnInit() {
  }

}
