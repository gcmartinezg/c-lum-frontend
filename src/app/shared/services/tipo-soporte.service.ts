import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoSoporte } from '../domain/tipo-soporte';

@Injectable({
  providedIn: 'root'
})
export class TipoSoporteService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoSoporte/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url + "getDataTipoSoporte/");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getTipoSoporte/" + id);
  }

  save(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.post(this.url + "saveTipoSoporte/", tipoSoporte);
  }

  update(tipoSoporte : TipoSoporte) : Observable<any> {
    return this.httpClient.put(this.url + "updateTipoSoporte/", tipoSoporte);
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
