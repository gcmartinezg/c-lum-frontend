import { Component, OnInit } from '@angular/core';
import { LamparaService } from 'src/app/shared/services/lampara.service';
import { Lampara } from 'src/app/shared/domain/lampara';

@Component({
  selector: 'app-mapa-lamparas-registradas',
  templateUrl: './mapa-lamparas-registradas.component.html',
  styleUrls: ['./mapa-lamparas-registradas.component.scss']
})
export class MapaLamparasRegistradasComponent implements OnInit {

  title = 'Lamparas Registradas';
  lat = 51.678418;
  lng = 7.809007;

  listadoLamparasRegisradas: Lampara[] = [];

  constructor(
    public lamparaService: LamparaService
  ) { }

  ngOnInit() {
    this.getLamparasRegistradas();
  }

  getLamparasRegistradas(){
    this.lamparaService.findAllLamparasRegistradas().subscribe(resolve=>{
      this.listadoLamparasRegisradas = resolve;
      console.log(this.listadoLamparasRegisradas[0].longitudLampara);
    }, reject=>{
      console.log(reject);
    });
  }

}
