import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TespIluminadoListComponent } from './tesp-iluminado-list.component';

const routes: Routes = [
  {
    path: '',
    component: TespIluminadoListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TespIluminadoListRoutingModule { }
