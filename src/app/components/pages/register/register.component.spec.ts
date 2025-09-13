import { MockBuilder, MockRender } from 'ng-mocks';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  beforeEach(() => MockBuilder(RegisterComponent));

  it('should create', () => {
    const fixture = MockRender(RegisterComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
