import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerceroCrudComponent } from './tercero-crud.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tercero-list/tercero-list.module#TerceroListModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceroCrudRoutingModule { }
