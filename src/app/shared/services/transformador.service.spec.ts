import { TestBed } from '@angular/core/testing';

import { TransformadorService } from './transformador.service';

describe('TransformadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformadorService = TestBed.get(TransformadorService);
    expect(service).toBeTruthy();
  });
});
