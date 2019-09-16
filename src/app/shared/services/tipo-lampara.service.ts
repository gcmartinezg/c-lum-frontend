import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoLampara } from '../domain/tipo-lampara';

@Injectable({
  providedIn: 'root'
})
export class TipoLamparaService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoLampara/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url+"getDataTipoLampara");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url+"getTipoLampara/" + id);
  }

  save(tipoLampara : TipoLampara) : Observable<any> {
    return this.httpClient.post(this.url+"saveTipoLampara", tipoLampara);
  }

  update(tipoLampara : TipoLampara) : Observable<any> {
    return this.httpClient.put(this.url+"updateTipoLampara/", tipoLampara);
  }

  /**
   * @param id 
   * @deprecated A tipo instalacion must not be deleted. 
   * Use deactivate(tipoInstalacion) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url+"deleteTipoLampara/" + id);
  }

  deactivate(tipoLampara : TipoLampara) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', tipoLampara);
  }

  activate(tipoLampara : TipoLampara) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', tipoLampara);
  }
}
