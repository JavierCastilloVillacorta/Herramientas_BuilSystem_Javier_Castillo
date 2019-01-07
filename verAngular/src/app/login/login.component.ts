import { Component, OnInit } from '@angular/core';
import { UsuIterfase } from '../model/usuIterfase';
import { LoginService }  from '../login.service';
import { NgForm } from '@angular/forms/src/directives/ng_form'

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


  constructor(private loginService: LoginService){}

  ngOnInit(){
    /*
    this.loginService.getUsuario().subscribe(usuario =>{
      console.log(usuario);
    })
    */
  }

  loginForm(form: NgForm){
    //alert("email: "+this.user.email);
    this.loginService.loginForm(this.user);


  }


}
