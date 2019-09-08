import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoEspacioIluminado } from '../domain/tipo-espacio-iluminado';

@Injectable({
  providedIn: 'root'
})
export class TipoEspacioIluminadoService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.post(this.url, tipoEspacioIluminado);
  }

  update(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url, tipoEspacioIluminado);
  }

  /**
   * @param id 
   * @deprecated A tipo espacio iluminado must not be deleted. 
   * Use deactivate(tipoEspacioIluminado) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoEspacioIluminado);
  }

  activate(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoEspacioIluminado);
  }
  
}
