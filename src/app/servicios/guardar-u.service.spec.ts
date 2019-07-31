import { TestBed } from '@angular/core/testing';

import { GuardarUService } from './guardar-u.service';

describe('GuardarUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardarUService = TestBed.get(GuardarUService);
    expect(service).toBeTruthy();
  });
});
