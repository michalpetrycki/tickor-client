import { TestBed } from '@angular/core/testing';

import { IssueControlsService } from './issue-controls.service';

describe('IssueControlsService', () => {
  let service: IssueControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssueControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
