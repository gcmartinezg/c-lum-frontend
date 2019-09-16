import { TestBed } from '@angular/core/testing';

import { TipoLamparaService } from './tipo-lampara.service';

describe('TipoLamparaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoLamparaService = TestBed.get(TipoLamparaService);
    expect(service).toBeTruthy();
  });
});
