import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosTecnicosComponent } from './activos-tecnicos.component';

describe('ActivosTecnicosComponent', () => {
  let component: ActivosTecnicosComponent;
  let fixture: ComponentFixture<ActivosTecnicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivosTecnicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivosTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
