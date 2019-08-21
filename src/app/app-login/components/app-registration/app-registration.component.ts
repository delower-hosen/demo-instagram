import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.scss']
})
export class AppRegistrationComponent implements OnInit {
  public loginForm: FormGroup;
  public isChecked: boolean = false;
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this.intitForm();
  }

  intitForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email, Validators.minLength(5)]),
      password: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
      name: new FormControl('', [ Validators.required, Validators.minLength(3) ])
    });
  }

  onSubmit(){
    let user = this.loginForm.value;
    console.log(user);
    
  };

  checked(){
    this.isChecked = !this.isChecked;
    console.log(this.isChecked);
  }

  get getFormErrors() {
    return this.loginForm.controls;
  }
}
