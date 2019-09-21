import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaLamparasRegistradasComponent } from './mapa-lamparas-registradas.component';

describe('MapaLamparasRegistradasComponent', () => {
  let component: MapaLamparasRegistradasComponent;
  let fixture: ComponentFixture<MapaLamparasRegistradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapaLamparasRegistradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaLamparasRegistradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
