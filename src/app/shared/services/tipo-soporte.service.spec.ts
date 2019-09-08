import { TestBed } from '@angular/core/testing';

import { TipoSoporteService } from './tipo-soporte.service';

describe('TipoSoporteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoSoporteService = TestBed.get(TipoSoporteService);
    expect(service).toBeTruthy();
  });
});
