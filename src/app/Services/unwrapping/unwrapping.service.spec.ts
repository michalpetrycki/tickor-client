import { TestBed } from '@angular/core/testing';

import { UnwrappingService } from './unwrapping.service';

describe('UnwrappingService', () => {
  let service: UnwrappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnwrappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
