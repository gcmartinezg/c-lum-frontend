import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoTransformadorListComponent } from './tipo-transformador-list.component';

describe('TipoTransformadorListComponent', () => {
  let component: TipoTransformadorListComponent;
  let fixture: ComponentFixture<TipoTransformadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoTransformadorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoTransformadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
