import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../domain/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoUsuario/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url + "getDataTipoUsuario/");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getTipoUsuario/" + id);
  }

  save(tipoUsuario : TipoUsuario) : Observable<any> {
    return this.httpClient.post(this.url + "saveTipoUsuario/", tipoUsuario);
  }

  update(tipoUsuario : TipoUsuario) : Observable<any> {
    return this.httpClient.put(this.url + "updateTipoUsuario/", tipoUsuario);
  }

  /**
   * @param id 
   * @deprecated A tipo usuario must not be deleted. 
   * Use deactivate(tipoUsuario) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoUsuario : TipoUsuario) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoUsuario);
  }

  activate(tipoUsuario : TipoUsuario) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoUsuario);
  }
  
}
