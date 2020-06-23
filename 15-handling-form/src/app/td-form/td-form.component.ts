import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css'],
})
export class TDFormComponent implements OnInit {
  @ViewChild('f', null) signupForm: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  ngOnInit(): void {}

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     username: 'htdang',
    //     email: 'htd@gmail.com'
    //   },
    //   secret: 'teacher',
    //   questionAnswer: 'ahaha',
    //   gender: 'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        username: 'lala',
      },
    });
  }
  // onSubmit(f: NgForm) {
  //   console.log(f.value);
  // }
  onSubmit() {
    console.log(this.signupForm.value.userData.username);
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
}
