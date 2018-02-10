import { Component } from '@angular/core';
import { JokeComponent, Joke } from './joke/joke.component';

// Decorator
function lesson (target) {
  // This is used to dynamically add a property to the target class that this decorates.
  // In this case, it adds a function called lesson into the target class, and returns a string "Angular 2"
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

// How do we pass arguments to a decorator like @Component?
// By creating a function that returns a decorator
function ToDoTask(config) {
  return function(target) {
    Object.defineProperty(target.prototype, 'GetToDoTask', { value: () => config.ToDoTask });
    Object.defineProperty(target.prototype, 'GetCompletedTask', { value: () => config.CompletedTask });
  };
}

@ToDoTask({
  ToDoTask: 'Learn Angular 2',
  CompletedTask: 'Set up Angular/Node development server'
})
class MyTask {
  task: string;

  constructor (aTask) {
    this.task = aTask;
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
  lesson = this.p.lesson(); // This is weird. Even though it complains about lesson not existing, but it actually works

  t = new MyTask('Angular 5');
  currentTask = this.t.task;
  todoTask = this.t.GetToDoTask();
  completedTask = this.t.GetCompletedTask();

  jokes: Joke[] = [
    new Joke('Test 1', 'Test description 1'),
    new Joke('Test 2', 'Test description 2')
  ];

  addJoke(joke: Joke) {
      //this.jokes.push(new Joke('New Joke', 'A new joke has been added'));
      this.jokes.push(new Joke(joke.UserID, joke.Username));
  }
}



