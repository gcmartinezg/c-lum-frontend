import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoZona } from '../domain/tipo-zona';

@Injectable({
  providedIn: 'root'
})
export class TipoZonaService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoZona : TipoZona) : Observable<any> {
    return this.httpClient.post(this.url, tipoZona);
  }

  update(tipoZona : TipoZona) : Observable<any> {
    return this.httpClient.put(this.url, tipoZona);
  }

  /**
   * @param id 
   * @deprecated A tipo zona must not be deleted. 
   * Use deactivate(tipoZona) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoZona : TipoZona) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoZona);
  }

  activate(tipoZona : TipoZona) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoZona);
  }
  
}
