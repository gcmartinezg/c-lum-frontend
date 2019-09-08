import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoMaterial } from '../domain/tipo-material';

@Injectable({
  providedIn: 'root'
})
export class TipoMaterialService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.post(this.url, tipoMaterial);
  }

  update(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.put(this.url, tipoMaterial);
  }

  /**
   * @param id 
   * @deprecated A tipo material must not be deleted. 
   * Use deactivate(tipoMaterial) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoMaterial);
  }

  activate(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoMaterial);
  }
  
}
