import { MockBuilder, MockRender } from 'ng-mocks';
import { ComparedProductItemComponent } from './compared-product-item.component';

describe('ComparedProductItemComponent', () => {
  beforeEach(() => MockBuilder(ComparedProductItemComponent));

  it('should create', () => {
    const fixture = MockRender(ComparedProductItemComponent, {
      product: { name: 'Test', prices: [], minPrice: 0 },
    });
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
