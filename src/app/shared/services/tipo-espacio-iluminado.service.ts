import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TipoEspacioIluminado } from '../domain/tipo-espacio-iluminado';

@Injectable({
  providedIn: 'root'
})
export class TipoEspacioIluminadoService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoEspacioIluminado/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url+"getDataTipoEspacioIluminado");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getTipoEspacioIluminado/" + id);
  }

  save(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.post(this.url+"saveTipoEspacioIluminado", tipoEspacioIluminado);
  }

  update(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url+"updateTipoEspacioIluminado/", tipoEspacioIluminado);
  }

  /**
   * @param id 
   * @deprecated A tipo espacio iluminado must not be deleted. 
   * Use deactivate(tipoEspacioIluminado) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url+"deleteTipoEspacioIluminado/" + id);
  }

  deactivate(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoEspacioIluminado);
  }

  activate(tipoEspacioIluminado : TipoEspacioIluminado) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoEspacioIluminado);
  }
  
}
