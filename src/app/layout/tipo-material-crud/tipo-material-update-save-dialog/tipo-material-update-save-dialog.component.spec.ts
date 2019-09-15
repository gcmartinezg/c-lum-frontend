import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMaterialUpdateSaveDialogComponent } from './tipo-material-update-save-dialog.component';

describe('TipoMaterialUpdateSaveDialogComponent', () => {
  let component: TipoMaterialUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoMaterialUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoMaterialUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoMaterialUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
