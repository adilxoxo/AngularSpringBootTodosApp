import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "adil.sheikh";
  password = "";
  errorMessage = "Invalid Credentails";
  invalidLogin  = false;

  constructor(private router : Router,private hardAuth : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
      if(this.hardAuth.authenticate(this.username,this.password)){
          this.invalidLogin = false;
          //Redirect to welcome page
          this.router.navigate(['welcome',this.username]);
      }else{
        this.invalidLogin = true;
      }
  }
}
