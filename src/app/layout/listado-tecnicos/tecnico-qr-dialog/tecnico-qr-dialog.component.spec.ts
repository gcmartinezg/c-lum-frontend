import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicoQrDialogComponent } from './tecnico-qr-dialog.component';

describe('TecnicoQrDialogComponent', () => {
  let component: TecnicoQrDialogComponent;
  let fixture: ComponentFixture<TecnicoQrDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnicoQrDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicoQrDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
