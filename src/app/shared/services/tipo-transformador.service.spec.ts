import { TestBed } from '@angular/core/testing';

import { TipoTransformadorService } from './tipo-transformador.service';

describe('TipoTransformadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoTransformadorService = TestBed.get(TipoTransformadorService);
    expect(service).toBeTruthy();
  });
});
