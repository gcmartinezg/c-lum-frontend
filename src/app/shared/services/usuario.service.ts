import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //FIXME no se pueden ingresar nombres de usuario con puntos
  public url:string = "http://localhost:8080/clum/rest/controllers/usuario/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url+"getDataUsuario");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url+"getUsuario/"+ id);
  }

  save(usuario : Usuario) : Observable<any> {
    return this.httpClient.post(this.url+"saveUsuario", usuario);
  }

  update(usuario : Usuario) : Observable<any> {
    return this.httpClient.put(this.url+"updateUsuario/", usuario);
  }

  /**
   * @param id 
   * @deprecated A usuario must not be deleted. 
   * Use deactivate(usuario) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(usuario : Usuario) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', usuario);
  }

  activate(usuario : Usuario) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', usuario);
  }
  
}
