import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent));

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it(`should have the 'pricelinkr-ui' title`, () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance.title).toEqual('pricelinkr-ui');
  });
});
