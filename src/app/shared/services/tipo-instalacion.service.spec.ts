import { TestBed } from '@angular/core/testing';

import { TipoInstalacionService } from './tipo-instalacion.service';

describe('TipoInstalacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoInstalacionService = TestBed.get(TipoInstalacionService);
    expect(service).toBeTruthy();
  });
});
