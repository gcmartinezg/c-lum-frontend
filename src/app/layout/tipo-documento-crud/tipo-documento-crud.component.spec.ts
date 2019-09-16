import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoCrudComponent } from './tipo-documento-crud.component';

describe('TipoDocumentoCrudComponent', () => {
  let component: TipoDocumentoCrudComponent;
  let fixture: ComponentFixture<TipoDocumentoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocumentoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
