import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoUpdateSaveDialogComponent } from './estado-update-save-dialog.component';

describe('EstadoUpdateSaveDialogComponent', () => {
  let component: EstadoUpdateSaveDialogComponent;
  let fixture: ComponentFixture<EstadoUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
