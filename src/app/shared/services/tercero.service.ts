import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tercero } from '../domain/tercero';

@Injectable({
  providedIn: 'root'
})
export class TerceroService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tercero : Tercero) : Observable<any> {
    return this.httpClient.post(this.url, tercero);
  }

  update(tercero : Tercero) : Observable<any> {
    return this.httpClient.put(this.url, tercero);
  }

  /**
   * @param id 
   * @deprecated A tercero must not be deleted. 
   * Use deactivate(tercero) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tercero : Tercero) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tercero);
  }

  activate(tercero : Tercero) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tercero);
  }
  
}
