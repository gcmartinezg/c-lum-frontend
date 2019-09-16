import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoInstalacionListComponent } from './tipo-instalacion-list.component';

describe('TipoInstalacionListComponent', () => {
  let component: TipoInstalacionListComponent;
  let fixture: ComponentFixture<TipoInstalacionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoInstalacionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoInstalacionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
