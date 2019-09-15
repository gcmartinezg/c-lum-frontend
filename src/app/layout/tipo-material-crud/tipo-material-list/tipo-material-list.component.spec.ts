import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaterialListComponent } from './tipo-material-list.component';

describe('TipoMaterialListComponent', () => {
  let component: TipoMaterialListComponent;
  let fixture: ComponentFixture<TipoMaterialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMaterialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
