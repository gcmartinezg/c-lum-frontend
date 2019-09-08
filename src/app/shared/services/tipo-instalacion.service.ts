import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoInstalacion } from '../domain/tipo-instalacion';

@Injectable({
  providedIn: 'root'
})
export class TipoInstalacionService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.post(this.url, tipoInstalacion);
  }

  update(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url, tipoInstalacion);
  }

  /**
   * @param id 
   * @deprecated A tipo instalacion must not be deleted. 
   * Use deactivate(tipoInstalacion) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoInstalacion);
  }

  activate(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoInstalacion);
  }
  
}
