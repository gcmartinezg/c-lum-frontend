import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSoporteCrudComponent } from './tipo-soporte-crud.component';

describe('TipoSoporteCrudComponent', () => {
  let component: TipoSoporteCrudComponent;
  let fixture: ComponentFixture<TipoSoporteCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSoporteCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSoporteCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
