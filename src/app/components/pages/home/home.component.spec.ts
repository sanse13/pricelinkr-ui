import { MockBuilder, MockRender } from 'ng-mocks';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => MockBuilder(HomeComponent));

  it('should create', () => {
    const fixture = MockRender(HomeComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should compare prices and set comparedProducts', () => {
    const fixture = MockRender(HomeComponent);
    const comp = fixture.point.componentInstance;
    comp.selectedCategory.setValue(1);
    comp.comparePrices();
    expect(comp.comparedProducts.length).toBeGreaterThan(0);
    comp.comparedProducts.forEach((p) => {
      expect(p.minPrice).toBe(Math.min(...p.prices.map((pr) => pr.price)));
    });
  });

  it('should clear comparedProducts', () => {
    const fixture = MockRender(HomeComponent);
    const comp = fixture.point.componentInstance;
    comp.comparedProducts = [
      { id: 1, name: 'Test', categoryId: 1, prices: [], minPrice: 0 },
    ];
    comp.clearFilter();
    expect(comp.comparedProducts).toEqual([]);
  });
});
