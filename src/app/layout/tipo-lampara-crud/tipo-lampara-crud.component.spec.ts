import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLamparaCrudComponent } from './tipo-lampara-crud.component';

describe('TipoLamparaCrudComponent', () => {
  let component: TipoLamparaCrudComponent;
  let fixture: ComponentFixture<TipoLamparaCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLamparaCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLamparaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
