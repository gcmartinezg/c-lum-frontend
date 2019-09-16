import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoTecnicosComponent } from './listado-tecnicos.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoTecnicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoTecnicosRoutingModule { }
