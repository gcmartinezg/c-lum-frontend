import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoBalasto } from '../domain/tipo-balasto';

@Injectable({
  providedIn: 'root'
})
export class TipoBalastroService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoBalastro : TipoBalasto) : Observable<any> {
    return this.httpClient.post(this.url, tipoBalastro);
  }

  update(tipoBalastro : TipoBalasto) : Observable<any> {
    return this.httpClient.put(this.url, tipoBalastro);
  }

  /**
   * @param id 
   * @deprecated A tipo balastro must not be deleted. 
   * Use deactivate(tipoBalastro) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoBalastro : TipoBalasto) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoBalastro);
  }

  activate(tipoBalastro : TipoBalasto) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoBalastro);
  }
  
}
