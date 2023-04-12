import { TestBed } from '@angular/core/testing';

import { FedbookService } from './fedbook.service';

describe('FedbookService', () => {
  let service: FedbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FedbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
