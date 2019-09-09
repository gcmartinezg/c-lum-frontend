import { Injectable } from '@angular/core';
import { Estado } from '../domain/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public listaEstado : Estado[];

  constructor() {
    this.listaEstado = [
      {id : 'S', nombre : 'Activo'},
      {id : 'N', nombre : 'Inactivo'}
    ];
   }

   findAll() : Estado[] {
     return this.listaEstado;
   }
}
