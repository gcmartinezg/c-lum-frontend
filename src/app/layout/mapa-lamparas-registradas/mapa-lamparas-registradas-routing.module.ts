import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MapaLamparasRegistradasComponent } from './mapa-lamparas-registradas.component';

const routes: Routes = [
  {
    path: '',
    component: MapaLamparasRegistradasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MapaLamparasRegistradasRoutingModule { }
