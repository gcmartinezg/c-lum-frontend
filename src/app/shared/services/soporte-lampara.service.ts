import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SoporteLampara } from '../domain/soporte-lampara';

@Injectable({
  providedIn: 'root'
})
export class SoporteLamparaService {

  //FIXME corregir la url del REST
  public url:string = "http://localhost:8080/bank-rest/rest/client/";

  constructor(public httpClient:HttpClient) { }

  findAll():Observable<any>{
    return this.httpClient.get(this.url);
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + id);
  }

  save(soporteLampara : SoporteLampara) : Observable<any> {
    return this.httpClient.post(this.url, soporteLampara);
  }

  update(soporteLampara : SoporteLampara) : Observable<any> {
    return this.httpClient.put(this.url, soporteLampara);
  }

  /**
   * @param id 
   * @deprecated A soporte lampara must not be deleted. 
   * Use deactivate(soporteLampara) instead.
   */
  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + id);
  }

  deactivate(soporteLampara : SoporteLampara) : Observable<any> {
    return this.httpClient.put(this.url + 'deactivate', soporteLampara);
  }

  activate(soporteLampara : SoporteLampara) : Observable<any> {
    return this.httpClient.put(this.url + 'activate', soporteLampara);
  }
  
}
