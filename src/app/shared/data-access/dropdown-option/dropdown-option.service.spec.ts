import { TestBed } from '@angular/core/testing';

import { DropdownOptionService } from './dropdown-option.service';

describe('DropdownOptionService', () => {
  let service: DropdownOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
