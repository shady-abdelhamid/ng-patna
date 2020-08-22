import { TestBed } from '@angular/core/testing';

import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';

describe('ProductDetailGuard', () => {
  let guard: ProductDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]) ]
    });
    guard = TestBed.inject(ProductDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
