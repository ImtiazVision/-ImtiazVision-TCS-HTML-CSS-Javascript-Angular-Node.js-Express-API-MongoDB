import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm){
    let login = loginRef.value;
    // console.log(login);
    if(login.user=="Raj" && login.password=="123"){
      this.msg="Login Successful";
    }else {
      this.msg="Login Failed.. Try once again please!!!";
    }

  }
}
