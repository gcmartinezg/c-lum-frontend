import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoZonaUpdateSaveDialogComponent } from './tipo-zona-update-save-dialog.component';

describe('TipoZonaUpdateSaveDialogComponent', () => {
  let component: TipoZonaUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoZonaUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoZonaUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoZonaUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
