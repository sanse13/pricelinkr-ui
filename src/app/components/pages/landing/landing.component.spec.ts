import { MockBuilder, MockRender } from 'ng-mocks';
import { LandingComponent } from './landing.component';

describe('LandingComponent', () => {
  beforeEach(() => MockBuilder(LandingComponent));

  it('should create', () => {
    jest
      .spyOn(LandingComponent.prototype, 'ngAfterViewInit')
      .mockImplementation(() => {});
    const fixture = MockRender(LandingComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
