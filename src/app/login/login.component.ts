import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNamePassGroup: any
  hide = true;


  constructor() { }

  ngOnInit(): void {
    // this.email = new FormControl('', [Validators.required, Validators.email]);
    this.userNamePassGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }


  getErrorMessage() {
    if (this.userNamePass.email.hasError('required')) 
    {
      return 'You must enter a value';
    }
    return this.userNamePass.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass(){
    // debugger
    if (this.userNamePass.password.hasError('required')){
      return 'You must enter a value';
    }
    return ''
  }

  get userNamePass() { return this.userNamePassGroup.controls; }
}
