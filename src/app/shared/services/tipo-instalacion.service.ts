import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoInstalacion } from '../domain/tipo-instalacion';

@Injectable({
  providedIn: 'root'
})
export class TipoInstalacionService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoInstalacion/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url+"getDataTipoInstalacion");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url+"getTipoInstalacion/" + id);
  }

  save(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.post(this.url+"saveTipoInstalacion", tipoInstalacion);
  }

  update(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url+"updateTipoInstalacion/", tipoInstalacion);
  }

  /**
   * @param id 
   * @deprecated A tipo instalacion must not be deleted. 
   * Use deactivate(tipoInstalacion) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url+"deleteTipoInstalacion/" + id);
  }

  deactivate(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoInstalacion);
  }

  activate(tipoInstalacion : TipoInstalacion) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoInstalacion);
  }
  
}
