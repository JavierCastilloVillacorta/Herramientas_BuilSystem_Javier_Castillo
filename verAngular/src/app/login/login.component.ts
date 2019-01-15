import { Component, OnInit } from '@angular/core';
import { UsuIterfase } from '../model/usuIterfase';
import { LoginService }  from '../login.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
//import { SessionService } from '../session.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user: UsuIterfase = {
    email: "",
    password: ""
  };

  validEmail = true;
  validPassword = true;
  validForm = true;

  constructor(
    private loginService: LoginService,
    private router: Router,
  //  private sessionService: SessionService
  ){}

  ngOnInit(){
  }

  loginForm(form: NgForm){

    if(this.user.email == ""){
      this.validEmail = false;
      this.validForm = false;
    } else{
      this.validEmail = true;
    }

    if (this.user.password == "") {
      this.validPassword = false
      this.validForm = false
    } else {
      this.validPassword = true
    }

    if(this.validForm){
      this.loginService.loginForm(this.user).then(data =>{
        if (data[0] == "Correcto"){
          //alert(data[1]);
          //this.sessionService.user = data[1];
          localStorage.setItem("email", data[1]);
          this.router.navigate(['./dashboard']);
        }else{
          alert(data[0]);
        }

      })
    }



  }


}
