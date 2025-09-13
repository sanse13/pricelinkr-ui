import { fakeAsync, tick } from '@angular/core/testing';
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

  it('should animate typewriter text', () => {
    jest.useFakeTimers();
    const comp = new LandingComponent();
    comp.typeWriterText = 'abc';
    comp.typeWriterSpeed = 1;
    comp.typeWriterDisplay = '';
    comp.typeWriterIndex = 0;
    (comp as any).startTypewriter();
    jest.runAllTimers();
    expect(comp.typeWriterDisplay).toBe('abc');
    jest.useRealTimers();
  });
});
