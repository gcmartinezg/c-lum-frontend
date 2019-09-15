import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSoporteUpdateSaveDialogComponent } from './tipo-soporte-update-save-dialog.component';

describe('TipoSoporteUpdateSaveDialogComponent', () => {
  let component: TipoSoporteUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoSoporteUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoSoporteUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoSoporteUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
