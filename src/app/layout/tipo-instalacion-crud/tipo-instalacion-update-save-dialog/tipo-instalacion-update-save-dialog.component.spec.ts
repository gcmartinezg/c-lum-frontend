import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInstalacionUpdateSaveDialogComponent } from './tipo-instalacion-update-save-dialog.component';

describe('TipoInstalacionUpdateSaveDialogComponent', () => {
  let component: TipoInstalacionUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoInstalacionUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInstalacionUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInstalacionUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
