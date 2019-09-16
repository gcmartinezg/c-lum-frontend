import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorEditComponent } from './coordinador-edit.component';

describe('CoordinadorEditComponent', () => {
  let component: CoordinadorEditComponent;
  let fixture: ComponentFixture<CoordinadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinadorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
