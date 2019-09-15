import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBalastoListComponent } from './tipo-balasto-list.component';

describe('TipoBalastoListComponent', () => {
  let component: TipoBalastoListComponent;
  let fixture: ComponentFixture<TipoBalastoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoBalastoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBalastoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
