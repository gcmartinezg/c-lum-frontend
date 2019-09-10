import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../domain/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/C-Lum-rest/rest/login/usuario";

  constructor(public httpClient:HttpClient) { }

  tryLoginUser(usuario : Usuario) : Observable<any> {
    return this.httpClient.post(this.url+"usuario", usuario);
  }
}
