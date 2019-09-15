import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipoZonaListComponent } from './tipo-zona-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoZonaListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoZonaListRoutingModule { }
