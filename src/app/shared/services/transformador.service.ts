import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transformador } from '../domain/transformador';

@Injectable({
  providedIn: 'root'
})
export class TransformadorService {

  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(transformador : Transformador) : Observable<any> {
    return this.httpClient.post(this.url, transformador);
  }

  update(transformador : Transformador) : Observable<any> {
    return this.httpClient.put(this.url, transformador);
  }

  /**
   * @param id 
   * @deprecated A transformador must not be deleted. 
   * Use deactivate(transformador) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(transformador : Transformador) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', transformador);
  }

  activate(trasformador : Transformador) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', trasformador);
  }
  
}
