import { TestBed } from '@angular/core/testing';

import { TipoBalastroService } from './tipo-balastro.service';

describe('TipoBalastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoBalastroService = TestBed.get(TipoBalastroService);
    expect(service).toBeTruthy();
  });
});
