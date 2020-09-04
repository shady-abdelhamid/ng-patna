import { TestBed } from '@angular/core/testing';

import { UserSettingsService } from './user-settings.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserSettingsService', () => {
  let service: UserSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
