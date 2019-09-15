import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBalastoCrudComponent } from './tipo-balasto-crud.component';

describe('TipoBalastoCrudComponent', () => {
  let component: TipoBalastoCrudComponent;
  let fixture: ComponentFixture<TipoBalastoCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBalastoCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBalastoCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
