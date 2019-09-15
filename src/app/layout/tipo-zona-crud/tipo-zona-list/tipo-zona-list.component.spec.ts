import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoZonaListComponent } from './tipo-zona-list.component';

describe('TipoZonaListComponent', () => {
  let component: TipoZonaListComponent;
  let fixture: ComponentFixture<TipoZonaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoZonaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoZonaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
