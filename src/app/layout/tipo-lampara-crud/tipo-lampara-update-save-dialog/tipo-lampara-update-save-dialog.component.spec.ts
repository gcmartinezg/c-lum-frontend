import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLamparaUpdateSaveDialogComponent } from './tipo-lampara-update-save-dialog.component';

describe('TipoLamparaUpdateSaveDialogComponent', () => {
  let component: TipoLamparaUpdateSaveDialogComponent;
  let fixture: ComponentFixture<TipoLamparaUpdateSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLamparaUpdateSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLamparaUpdateSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
