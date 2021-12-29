import { TestBed } from '@angular/core/testing';

import { MachinelistService } from './machinelist.service';

describe('MachinelistService', () => {
  let service: MachinelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
