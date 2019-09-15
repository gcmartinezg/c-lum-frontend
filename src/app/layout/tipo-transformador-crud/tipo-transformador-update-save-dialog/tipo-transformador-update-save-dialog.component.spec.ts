import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransformadorUpdateSaveDialogComponent } from './tipo-transformador-update-save-dialog.component';

describe('TipoTransformadorUpdateSaveDialogComponent', () => {
  let component: TipoTransformadorUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoTransformadorUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransformadorUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransformadorUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
