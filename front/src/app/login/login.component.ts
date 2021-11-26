import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { loginM } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private services: LoginService) {


   }


  loginM(loginP:Form){
    // console.log(loginP);
    // console.log(this.login);
    //subscribe devuelve una respuesta
    this.services.postSendLogin(this.login).subscribe(res=>{ console.log(res)});
  }

  login: loginM= new loginM();
}
