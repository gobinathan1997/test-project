import { TestBed } from '@angular/core/testing';

import { SubjectInterceptor } from './subject.interceptor';

describe('SubjectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SubjectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SubjectInterceptor = TestBed.inject(SubjectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
