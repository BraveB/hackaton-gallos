import { TestBed } from '@angular/core/testing';

import { PotterServiceService } from './potter-service.service';

describe('PotterServiceService', () => {
  let service: PotterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PotterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
