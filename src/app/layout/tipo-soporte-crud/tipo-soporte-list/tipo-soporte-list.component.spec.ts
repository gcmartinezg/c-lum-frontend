import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSoporteListComponent } from './tipo-soporte-list.component';

describe('TipoSoporteListComponent', () => {
  let component: TipoSoporteListComponent;
  let fixture: ComponentFixture<TipoSoporteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSoporteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSoporteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
