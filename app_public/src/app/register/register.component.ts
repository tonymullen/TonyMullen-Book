import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  returnPage = '/';
  pageContent = {
    header : {
      title: 'Create a new Loc8r account',
    },
  }

  registerForm: FormGroup;
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100),
    Validators.pattern(EMAIL_REGEX)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      password: this.password
    });
  }

  register() {
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value).subscribe(
      res => {
        console.log('Sweet');
        // this.toast.open('you successfully registered!', 'success');
        this.router.navigate(['/login']);
      },
      error => console.log(error)
      // error => this.toast.open('email already exists', 'danger')
    );
  }

  onSubmit() {
    console.log('submit');
  }
}
