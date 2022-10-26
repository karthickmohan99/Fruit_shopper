import { TestBed } from '@angular/core/testing';

import { FiredataService } from './firedata.service';

describe('FiredataService', () => {
  let service: FiredataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiredataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
