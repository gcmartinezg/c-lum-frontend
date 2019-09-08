import { TestBed } from '@angular/core/testing';

import { CanalizacionService } from './canalizacion.service';

describe('CanalizacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanalizacionService = TestBed.get(CanalizacionService);
    expect(service).toBeTruthy();
  });
});
