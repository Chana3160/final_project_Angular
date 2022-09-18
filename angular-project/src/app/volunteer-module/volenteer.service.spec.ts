import { TestBed } from '@angular/core/testing';

import { VolenteerService } from './volenteer.service';

describe('VolenteerService', () => {
  let service: VolenteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolenteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
