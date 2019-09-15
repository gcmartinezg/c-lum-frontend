import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransformadorCrudComponent } from './tipo-transformador-crud.component';

describe('TipoTransformadorCrudComponent', () => {
  let component: TipoTransformadorCrudComponent;
  let fixture: ComponentFixture<TipoTransformadorCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransformadorCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransformadorCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
