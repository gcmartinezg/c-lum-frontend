import { TestBed } from '@angular/core/testing';

import { TipoZonaService } from './tipo-zona.service';

describe('TipoZonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoZonaService = TestBed.get(TipoZonaService);
    expect(service).toBeTruthy();
  });
});
