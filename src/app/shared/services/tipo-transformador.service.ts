import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoTransformador } from '../domain/tipo-transformador';

@Injectable({
  providedIn: 'root'
})
export class TipoTransformadorService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.post(this.url, tipoTransformador);
  }

  update(tipoTransformador : TipoTransformador) : Observable<any> {
    return this.httpClient.put(this.url, tipoTransformador);
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
