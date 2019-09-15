import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoTransformador } from '../domain/tipo-transformador';

@Injectable({
  providedIn: 'root'
})
export class TipoTransformadorService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoTransformador/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url + "getDataTipoTransformador/");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getTipoTransformador/" + id);
  }

  save(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.post(this.url + "saveTipoTransformador/", tipoTransformador);
  }

  update(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.put(this.url + "updateTipoTransformador/", tipoTransformador);
  }

  /**
   * @param id 
   * @deprecated A tipo transformador must not be deleted. 
   * Use deactivate(tipoTransformador) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoTransformador);
  }

  activate(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoTransformador);
  }
  
}
