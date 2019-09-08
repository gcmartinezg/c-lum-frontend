import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerosSaveDialogComponent } from './terceros-save-dialog.component';

describe('TercerosSaveDialogComponent', () => {
  let component: TercerosSaveDialogComponent;
  let fixture: ComponentFixture<TercerosSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercerosSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercerosSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
