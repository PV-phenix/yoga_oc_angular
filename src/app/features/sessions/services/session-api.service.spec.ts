import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { SessionApiService } from './session-api.service';

describe('SessionsService', () => {
  let service: SessionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
});
    service = TestBed.inject(SessionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
