import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoMaterial } from '../domain/tipo-material';

@Injectable({
  providedIn: 'root'
})
export class TipoMaterialService {

  public url:string = "http://localhost:8080/clum-backend/rest/controllers/tipoMaterial/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url + "getDataTipoMaterial/");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getTipoMaterial/" + id);
  }

  save(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.post(this.url + "saveTipoMaterial/", tipoMaterial);
  }

  update(tipoMaterial : TipoMaterial) : Observable<any> {
    return this.httpClient.put(this.url + "updateTipoMaterial/", tipoMaterial);
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
