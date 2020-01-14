import { Component, ElementRef, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // onSubmit(f: NgForm) {
  //   console.log(f);
  // }

  @ViewChild('f', null) signupForm: NgForm;

  onSubmit() {
    console.log(this.signupForm);
  }
}
