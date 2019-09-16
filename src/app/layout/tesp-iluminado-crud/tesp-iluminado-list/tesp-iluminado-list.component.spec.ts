import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TespIluminadoListComponent } from './tesp-iluminado-list.component';

describe('TespIluminadoListComponent', () => {
  let component: TespIluminadoListComponent;
  let fixture: ComponentFixture<TespIluminadoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TespIluminadoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TespIluminadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
