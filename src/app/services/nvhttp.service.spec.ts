import { TestBed } from '@angular/core/testing';

import { NvhttpService } from './nvhttp.service';

describe('NvhttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NvhttpService = TestBed.get(NvhttpService);
    expect(service).toBeTruthy();
  });
});
