import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lampara } from '../domain/lampara';

@Injectable({
  providedIn: 'root'
})
export class LamparaService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/clum-backend/rest/controllers/lampara/";

  constructor(public httpClient:HttpClient) { }

  //TODO Falta el crud de lampara
  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(lampara : Lampara) : Observable<any> {
    return this.httpClient.post(this.url, lampara);
  }

  update(lampara : Lampara) : Observable<any> {
    return this.httpClient.put(this.url, lampara);
  }

  /**
   * @param id 
   * @deprecated A lampara must not be deleted. 
   * Use deactivate(lampara) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(lampara : Lampara) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', lampara);
  }

  activate(lampara : Lampara) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', lampara);
  }

  findAllLamparasRegistradas(): Observable<any>{
    return this.httpClient.get(this.url+"getLamparaLamparaRegistradas")
  }
  
}
