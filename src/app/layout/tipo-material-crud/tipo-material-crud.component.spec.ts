import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaterialCrudComponent } from './tipo-material-crud.component';

describe('TipoMaterialCrudComponent', () => {
  let component: TipoMaterialCrudComponent;
  let fixture: ComponentFixture<TipoMaterialCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMaterialCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMaterialCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
