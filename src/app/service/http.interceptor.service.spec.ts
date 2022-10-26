import { TestBed } from '@angular/core/testing';

import { httpHttpInterceptor } from './http.interceptor.service';

describe('Http.InterceptorService', () => {
  let service: httpHttpInterceptor ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(httpHttpInterceptor );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
