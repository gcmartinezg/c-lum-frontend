import { TestBed } from '@angular/core/testing';

import { LamparaRegistradaService } from './lampara-registrada.service';

describe('LamparaRegistradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LamparaRegistradaService = TestBed.get(LamparaRegistradaService);
    expect(service).toBeTruthy();
  });
});
