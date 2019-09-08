import { TestBed } from '@angular/core/testing';

import { RedAlimentacionService } from './red-alimentacion.service';

describe('RedAlimentacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedAlimentacionService = TestBed.get(RedAlimentacionService);
    expect(service).toBeTruthy();
  });
});
