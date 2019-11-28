import { TestBed } from '@angular/core/testing';

import { MyfireService } from './myfire.service';

describe('MyfireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyfireService = TestBed.get(MyfireService);
    expect(service).toBeTruthy();
  });
});
