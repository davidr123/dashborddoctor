import { TestBed } from '@angular/core/testing';

import { FilterpatientsService } from './filterpatients.service';

describe('FilterpatientsService', () => {
  let service: FilterpatientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterpatientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
