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

  constructor(private router: Router) { }

  signIn() {

  }

  signUp() {
    this.router.navigate(['/sign-up'], {
        queryParams: { type: 'New'}
      }
    );
  }

}
