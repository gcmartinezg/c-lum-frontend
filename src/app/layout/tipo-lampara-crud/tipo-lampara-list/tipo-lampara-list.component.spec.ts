import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLamparaListComponent } from './tipo-lampara-list.component';

describe('TipoLamparaListComponent', () => {
  let component: TipoLamparaListComponent;
  let fixture: ComponentFixture<TipoLamparaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLamparaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLamparaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
