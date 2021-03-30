import { TestBed } from '@angular/core/testing';

import { AuthorsDataService } from './authors-data.service';

describe('AuthorsDataService', () => {
  let service: AuthorsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
