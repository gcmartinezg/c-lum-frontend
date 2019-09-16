import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TespIluminadoUpdateSaveDialogComponent } from './tesp-iluminado-update-save-dialog.component';

describe('TespIluminadoUpdateSaveDialogComponent', () => {
  let component: TespIluminadoUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TespIluminadoUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TespIluminadoUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TespIluminadoUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
