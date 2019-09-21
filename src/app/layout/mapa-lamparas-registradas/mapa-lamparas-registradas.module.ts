import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaLamparasRegistradasRoutingModule } from './mapa-lamparas-registradas-routing.module';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { MapaLamparasRegistradasComponent } from './mapa-lamparas-registradas.component';

@NgModule({
  declarations: [MapaLamparasRegistradasComponent],
  imports: [
    CommonModule,
    MapaLamparasRegistradasRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANLa4qjQlE5ps-lIQqC5XUsgIKKkt5U5g'
    })
  ]
})
export class MapaLamparasRegistradasModule { }
