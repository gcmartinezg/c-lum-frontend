import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoZonaCrudComponent } from './tipo-zona-crud.component';

describe('TipoZonaCrudComponent', () => {
  let component: TipoZonaCrudComponent;
  let fixture: ComponentFixture<TipoZonaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoZonaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoZonaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
