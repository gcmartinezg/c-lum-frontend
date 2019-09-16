import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoInstalacionListComponent } from './tipo-instalacion-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoInstalacionListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TipoInstalacionListRoutingModule { }
