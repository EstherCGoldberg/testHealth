import { TestBed } from '@angular/core/testing';

import { MyIntercaptorInterceptor } from '../components/my-intercaptor.interceptor';

describe('MyIntercaptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyIntercaptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyIntercaptorInterceptor = TestBed.inject(MyIntercaptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
