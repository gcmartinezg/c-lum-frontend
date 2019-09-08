import { TestBed } from '@angular/core/testing';

import { TipoEspacioIluminadoService } from './tipo-espacio-iluminado.service';

describe('TipoEspacioIluminadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoEspacioIluminadoService = TestBed.get(TipoEspacioIluminadoService);
    expect(service).toBeTruthy();
  });
});
