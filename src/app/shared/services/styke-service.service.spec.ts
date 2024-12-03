import { TestBed } from '@angular/core/testing';

import { StykeServiceService } from './styke-service.service';

describe('StykeServiceService', () => {
  let service: StykeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StykeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
