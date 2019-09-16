import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoDocumentoListComponent } from './tipo-documento-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoDocumentoListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [RouterModule]
})
export class TipoDocumentoListRoutingModule { }
