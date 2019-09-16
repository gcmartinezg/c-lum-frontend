import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TespIluminadoCrudComponent } from './tesp-iluminado-crud.component';

describe('TespIluminadoCrudComponent', () => {
  let component: TespIluminadoCrudComponent;
  let fixture: ComponentFixture<TespIluminadoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TespIluminadoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TespIluminadoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
