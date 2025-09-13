import { MockBuilder, MockRender } from 'ng-mocks';
import { TopbarComponent } from './topbar.component';

describe('TopbarComponent', () => {
  beforeEach(() => MockBuilder(TopbarComponent));

  it('should render username', () => {
    const fixture = MockRender(TopbarComponent, { username: 'TestUser' });
    expect(fixture.nativeElement.textContent).toContain('TestUser');
  });
});
