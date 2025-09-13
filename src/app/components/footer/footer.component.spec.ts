import { MockBuilder, MockRender } from 'ng-mocks';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(() => MockBuilder(FooterComponent));

  it('should create', () => {
    const fixture = MockRender(FooterComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
