import { TestBed } from '@angular/core/testing';

import { SoporteLamparaService } from './soporte-lampara.service';

describe('SoporteLamparaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoporteLamparaService = TestBed.get(SoporteLamparaService);
    expect(service).toBeTruthy();
  });
});
