import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioUpdateSaveDialogComponent } from './tipo-usuario-update-save-dialog.component';

describe('TipoUsuarioUpdateSaveDialogComponent', () => {
  let component: TipoUsuarioUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoUsuarioUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
