import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginM } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:1000/UV";
  constructor(private http: HttpClient) { 

  }


  postSendLogin(login:loginM){
    
    return this.http.post(this.url , login);
    
  }

}
