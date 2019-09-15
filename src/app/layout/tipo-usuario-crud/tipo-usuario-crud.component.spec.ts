import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioCrudComponent } from './tipo-usuario-crud.component';

describe('TipoUsuarioCrudComponent', () => {
  let component: TipoUsuarioCrudComponent;
  let fixture: ComponentFixture<TipoUsuarioCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoUsuarioCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
