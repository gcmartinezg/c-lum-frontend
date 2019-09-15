import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoSoporteListComponent } from './tipo-soporte-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoSoporteListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoSoporteListRoutingModule { }
