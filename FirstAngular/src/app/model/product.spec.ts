import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1,'name',2300)).toBeTruthy();
  });
});
