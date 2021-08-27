import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    user:new FormControl(),
    pass: new FormControl()
  });

  msg: string = "";
  constructor(public routes:Routes) { } // DI DependencyInjection

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    if (login.user == "Raj" && login.pass== "123") 
      { this.routes.navigate(['home']);}
      else {
        this.msg = "Invalid User/Password";
    }
    this.loginRef.reset();


}


