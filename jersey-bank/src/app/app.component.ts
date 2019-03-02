import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jersey National Bank';
  isOn = 1;
  usernameRequired = 0;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get lf() { return this.loginForm.controls; }

  signIn() {

    if (this.lf.username.status === 'INVALID') {
      console.log('User Name Errors: ' + JSON.stringify(this.lf.username.errors));
      if (this.lf.username.errors.required != null) {
        this.usernameRequired = 1;
      }
    } else {
      this.usernameRequired = 0;
    }
    if (this.lf.password.status === 'INVALID') {
      console.log('Password Errors: ' + JSON.stringify(this.lf.password.errors));
    }
  }

  signUp() {
    this.isOn = 1;
  }



}
