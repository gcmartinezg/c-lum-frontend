import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/usuario/login";

  constructor(public httpClient:HttpClient) { }

  tryLoginUser(usuario : Usuario) : Observable<any> {
    return this.httpClient.post(this.url, usuario);
  }
  
}
