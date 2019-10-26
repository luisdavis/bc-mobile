import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { users } from '../temp-data/user-data'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  // users = users;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
    ) { 
    if(this.getUser()){
      this.router.navigate(['/home'])
    }
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  validate(){
    const val = this.form.value;
    const user = users.find(user => user.username === val.username && user.password === val.password);
    if ((val.username && val.password) && user) {
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(['/home'])
        // location.reload(true);

    }else{
      this._snackBar.open('Your password or username present errors please correct them', "close", {
        duration: 2000,
      });
    }

  }

  getUser(){
    return JSON.parse(localStorage.getItem("user"));
  }
}
