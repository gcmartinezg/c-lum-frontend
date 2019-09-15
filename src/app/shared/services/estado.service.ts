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

  constructor(
    public httpClient:HttpClient
  ) {
    //this.listaEstado = [
    //  {id : 'S', nombre : 'Activo'},
    //  {id : 'N', nombre : 'Inactivo'}
    //];
   }

   /*findAll() : Estado[] {
     return this.listaEstado;
   }*/

   findAll():Observable<any>{
    return this.httpClient.get(this.url+"getDataEstado");
  }
}
