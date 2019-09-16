import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioUpdateSaveDialogComponent } from './usuario-update-save-dialog.component';

describe('UsuarioUpdateSaveDialogComponent', () => {
  let component: UsuarioUpdateSaveDialogComponent;
  let fixture: ComponentFixture<UsuarioUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
