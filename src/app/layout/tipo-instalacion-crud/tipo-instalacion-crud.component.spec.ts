import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInstalacionCrudComponent } from './tipo-instalacion-crud.component';

describe('TipoInstalacionCrudComponent', () => {
  let component: TipoInstalacionCrudComponent;
  let fixture: ComponentFixture<TipoInstalacionCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInstalacionCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInstalacionCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
