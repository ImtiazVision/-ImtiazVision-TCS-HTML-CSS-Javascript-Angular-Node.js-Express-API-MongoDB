import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    public loginSer:LoginService,
    public router:Router) { }
  msg?:string;

  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    // console.log(login);

    this.loginSer.checkLoginDetails(login).
    subscribe(result =>{
      if(result == "Success"){
        this.router.navigate(['home',login.email]); // navigate to home page. Based on authentication, we go to dashboard and append that user's email id.
      } else {
        this.msg = result;
      }
    }, 
    error => console.log(error));
    this.loginRef.reset();
  }

  // pass value from component to service

}
