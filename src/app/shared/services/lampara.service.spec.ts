import { TestBed } from '@angular/core/testing';

import { LamparaService } from './lampara.service';

describe('LamparaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LamparaService = TestBed.get(LamparaService);
    expect(service).toBeTruthy();
  });
});
