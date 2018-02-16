import { Component, OnInit } from '@angular/core';
// import { FormGroupName } from '@angular/forms';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';


class Person {
  constructor (
    public firstName: string = '',
    public lastName: string = '',
    public email: string = '',
    public password: string = '',
    public language: string = ''
  ) {
  }
}

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  // In the model-driven approach, the form is reset by calling the reset() function on myForm model
  // In template-driven approach, there is no access to the component from the template. The only access
  // available is the f reference variable.

  // However, there is a way to get a reference to the ngForm instance here in the component
  // by using a ViewChild decorator.
  // This decorator gives the component a reference to something in the template
  @ViewChild('f') form: any;

  model: Person = new Person();
  onSubmitText: string;
  langs: any[] = [
    'English',
    'French',
    'German'
  ];

  constructor() { }

  ngOnInit() {
  }

  OnSubmit() {
    this.onSubmitText = 'First Name: ' + this.model.firstName +
                    '. Last Name: ' + this.model.lastName;

    // This line is used to reset form using the form reference variable in the template
    // which is only available via the ViewChild decorator
    // this.form.reset();
  }

}
