import { TestBed } from '@angular/core/testing';

import { ActivepowerService } from './activepower.service';

describe('ActivepowerService', () => {
  let service: ActivepowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivepowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
