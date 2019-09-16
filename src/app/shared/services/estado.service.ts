import { Injectable } from '@angular/core';
import { Estado } from '../domain/estado';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public listaEstado : Estado[];
  public url:string = "http://localhost:8080/clum-backend/rest/controllers/estado/";

  constructor(public httpClient:HttpClient) {}

   findAll():Observable<any>{
    return this.httpClient.get(this.url + "getDataEstado/");
  }

  findById(id : String) : Observable<any> {
    return this.httpClient.get(this.url + "getEstado/" + id);
  }

  save(estado : Estado) : Observable<any> {
    return this.httpClient.post(this.url + "saveEstado/", estado);
  }

  update(estado : Estado) : Observable<any> {
    return this.httpClient.put(this.url + "updateEstado/", estado);
  }

  delete(id : String) : Observable<any> {
    return this.httpClient.delete(this.url + "deleteEstado/"+ id);
  }

}