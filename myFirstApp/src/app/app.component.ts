import { Component } from '@angular/core';

// Decorator
function lesson (target) {
  Object.defineProperty(target.prototype, 'lesson', {value: () => 'Angular 2'});
}

interface IHuman {
  hasLegs: boolean;
  hasHands: boolean;

  name?: Function;
  isLate?(time: Date): Function;

}

// Adding a new class
class Person implements IHuman {
  firstName = 'John';
  lastName = 'Doe';
  hasHands = true;
  hasLegs = true;

  constructor (firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
  }

  name() {
    return `${this.firstName} ${this.lastName}`;
  }

  whoAreYou() {
    return `Hi, I'm ${this.name()}`;
  }
}

@lesson
class Student extends Person {
  course: string;

  constructor (firstname, lastname, course) {
    super(firstname, lastname);
    this.course = course;
  }

  whoAreYou() {
    return `${super.whoAreYou()} and I'm studying ${this.course}`;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The world of Angular 5';

  p = new Student('Franky', 'Maslim', 'Computer Science');
  name = this.p.whoAreYou();
}

