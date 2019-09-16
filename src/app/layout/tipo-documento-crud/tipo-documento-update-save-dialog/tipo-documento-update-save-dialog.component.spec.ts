import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoUpdateSaveDialogComponent } from './tipo-documento-update-save-dialog.component';

describe('TipoDocumentoUpdateSaveDialogComponent', () => {
  let component: TipoDocumentoUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoDocumentoUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDocumentoUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
