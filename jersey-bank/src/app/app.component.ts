import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jersey National Bank';
  isOn = 1;

  constructor(private router: Router) { }

  signIn() {

  }

  signUp() {
    this.isOn = 1;
  }

}
