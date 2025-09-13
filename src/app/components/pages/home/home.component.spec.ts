import { MockBuilder, MockRender } from 'ng-mocks';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(() => MockBuilder(HomeComponent));

  it('should create', () => {
    const fixture = MockRender(HomeComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
