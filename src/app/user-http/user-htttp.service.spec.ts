import { TestBed } from '@angular/core/testing';

import { UserHtttpService } from './user-htttp.service';

describe('UserHtttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserHtttpService = TestBed.get(UserHtttpService);
    expect(service).toBeTruthy();
  });
});
