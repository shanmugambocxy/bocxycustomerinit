import { TestBed } from '@angular/core/testing';

import { ProductfindstoreService } from './productfindstore.service';

describe('ProductfindstoreService', () => {
  let service: ProductfindstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductfindstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
