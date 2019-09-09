import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroCrudComponent } from './tercero-crud.component';

describe('TerceroCrudComponent', () => {
  let component: TerceroCrudComponent;
  let fixture: ComponentFixture<TerceroCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceroCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
