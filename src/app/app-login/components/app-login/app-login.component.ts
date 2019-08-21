import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
    this.intitForm();
  }

  intitForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(5)]),
      password: new FormControl('', [ Validators.required, Validators.minLength(5) ])
    });
  }

  onSubmit(){
    let user = this.loginForm.value;
    console.log(user);
  }

  get getFormErrors() {
    return this.loginForm.controls;
  }
}
