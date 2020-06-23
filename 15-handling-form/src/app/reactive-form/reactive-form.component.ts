import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   userData: new FormGroup({
    //     username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    //     email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)),
    //   }),
    //   gender: new FormControl('male'),
    //   hobbies: new FormArray([]),
    // });
    this.createForm();
    this.signupForm.statusChanges.subscribe(
      (status) => { console.log(status); }
    );
  }

  createForm() {
    this.signupForm = this.fb.group({
      userData: [{
        username: [null, [Validators.required, this.forbiddenNames.bind(this)]],
        email: [null, [Validators.required, Validators.email], this.forbiddenEmails.bind(this)],
      }],
      gender: ['male'],
      hobbies: [[]],
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        control.value === 'test@test.com'
        ? resolve({emailIsForbidden: true})
        : resolve(null);
      }, 1500);
    });
    return promise;
  }
}
