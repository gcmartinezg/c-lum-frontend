import { TestBed } from '@angular/core/testing';

import { TipoMaterialService } from './tipo-material.service';

describe('TipoMaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMaterialService = TestBed.get(TipoMaterialService);
    expect(service).toBeTruthy();
  });
});
