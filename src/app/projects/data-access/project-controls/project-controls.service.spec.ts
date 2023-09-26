import { TestBed } from '@angular/core/testing';

import { ProjectControlsService } from './project-controls.service';

describe('ProjectControlsService', () => {
  let service: ProjectControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
