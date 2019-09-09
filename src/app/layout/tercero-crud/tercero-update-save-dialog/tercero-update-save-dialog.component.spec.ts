import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroUpdateSaveDialogComponent } from './tercero-update-save-dialog.component';

describe('TerceroUpdateSaveDialogComponent', () => {
  let component: TerceroUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TerceroUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceroUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
