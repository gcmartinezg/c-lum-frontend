import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoSoporte } from '../domain/tipo-soporte';

@Injectable({
  providedIn: 'root'
})
export class TipoSoporteService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.post(this.url, tipoSoporte);
  }

  update(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.put(this.url, tipoSoporte);
  }

  /**
   * @param id 
   * @deprecated A tipo soporte must not be deleted. 
   * Use deactivate(tipoSoporte) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoSoporte);
  }

  activate(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoSoporte);
  }
  
}
