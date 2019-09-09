import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceroListComponent } from './tercero-list.component';

describe('TerceroListComponent', () => {
  let component: TerceroListComponent;
  let fixture: ComponentFixture<TerceroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
