import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RedAlimentacion } from '../domain/red-alimentacion';

@Injectable({
  providedIn: 'root'
})
export class RedAlimentacionService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(redAlimentacion : RedAlimentacion) : Observable<any> {
    return this.httpClient.post(this.url, redAlimentacion);
  }

  update(redAlimentacion : RedAlimentacion) : Observable<any> {
    return this.httpClient.put(this.url, redAlimentacion);
  }

  /**
   * @param id 
   * @deprecated A red alimentacion must not be deleted. 
   * Use deactivate(redAlimentacion) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(redAlimentacion : RedAlimentacion) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', redAlimentacion);
  }

  activate(redAlimentacion : RedAlimentacion) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', redAlimentacion);
  }
  
}
