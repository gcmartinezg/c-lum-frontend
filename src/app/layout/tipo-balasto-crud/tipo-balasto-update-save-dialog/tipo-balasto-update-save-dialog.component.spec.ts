import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBalastoUpdateSaveDialogComponent } from './tipo-balasto-update-save-dialog.component';

describe('TipoBalastoUpdateSaveDialogComponent', () => {
  let component: TipoBalastoUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoBalastoUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBalastoUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBalastoUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
