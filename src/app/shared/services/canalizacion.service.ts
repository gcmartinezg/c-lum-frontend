import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Canalizacion } from '../domain/canalizacion';

@Injectable({
  providedIn: 'root'
})
export class CanalizacionService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(canalizacion : Canalizacion) : Observable<any> {
    return this.httpClient.post(this.url, canalizacion);
  }

  update(canalizacion : Canalizacion) : Observable<any> {
    return this.httpClient.put(this.url, canalizacion);
  }

  /**
   * @param id 
   * @deprecated A canalizacion must not be deleted. 
   * Use deactivate(canalizacion) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(canalizacion : Canalizacion) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', canalizacion);
  }

  activate(canalizacion : Canalizacion) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', canalizacion);
  }
  
}
