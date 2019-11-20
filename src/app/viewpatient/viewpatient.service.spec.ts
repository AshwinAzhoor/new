import { TestBed } from '@angular/core/testing';

import { ViewpatientService } from './viewpatient.service';

describe('ViewpatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewpatientService = TestBed.get(ViewpatientService);
    expect(service).toBeTruthy();
  });
});
