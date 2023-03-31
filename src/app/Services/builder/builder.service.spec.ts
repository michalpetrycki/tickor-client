import { TestBed } from '@angular/core/testing';

import { BuilderService } from './builder.service';

describe('BuilderService', () => {
  let service: BuilderService<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
