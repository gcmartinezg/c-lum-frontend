import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TipoLamparaListComponent } from './tipo-lampara-list.component';

const routes: Routes = [
  {
    path: '',
    component: TipoLamparaListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TipoLamparaListRoutingModule { }
