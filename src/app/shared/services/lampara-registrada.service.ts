import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LamparaRegistrada } from '../domain/lampara-registrada';

@Injectable({
  providedIn: 'root'
})
export class LamparaRegistradaService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(lamparaRegistrada : LamparaRegistrada) : Observable<any> {
    return this.httpClient.post(this.url, lamparaRegistrada);
  }

  update(lamparaRegistrada : LamparaRegistrada) : Observable<any> {
    return this.httpClient.put(this.url, lamparaRegistrada);
  }

  /**
   * @param id 
   * @deprecated A lampara registrada must not be deleted. 
   * Use deactivate(lamparaRegistrada) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(lamparaRegistrada : LamparaRegistrada) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', lamparaRegistrada);
  }

  activate(lamparaRegistrada : LamparaRegistrada) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', lamparaRegistrada);
  }
  
}
