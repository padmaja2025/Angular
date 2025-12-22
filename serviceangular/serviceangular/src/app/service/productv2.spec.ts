import { TestBed } from '@angular/core/testing';

import { Productv2Service } from './productv2';

describe('Productv2', () => {
  let service: Productv2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productv2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
