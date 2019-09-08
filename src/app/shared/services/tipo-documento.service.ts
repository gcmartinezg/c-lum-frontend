import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDocumento } from '../domain/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoDocumento : TipoDocumento) : Observable<any> {
    return this.httpClient.post(this.url, tipoDocumento);
  }

  update(tipoDocumento : TipoDocumento) : Observable<any> {
    return this.httpClient.put(this.url, tipoDocumento);
  }

  /**
   * @param id 
   * @deprecated A tipo documento must not be deleted. 
   * Use deactivate(tipoDocumento) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoDocumento : TipoDocumento) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoDocumento);
  }

  activate(tipoDocumento : TipoDocumento) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoDocumento);
  }
  
}