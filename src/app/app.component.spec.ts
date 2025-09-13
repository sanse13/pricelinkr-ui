import { MockBuilder, MockRender } from 'ng-mocks';
import { AppComponent } from './app.component';
import { ThemeService } from './services/theme.service';

describe('AppComponent', () => {
  beforeEach(() => MockBuilder(AppComponent).mock(ThemeService));

  it('should create the app', () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it(`should have the 'pricelinkr-ui' title`, () => {
    const fixture = MockRender(AppComponent);
    expect(fixture.point.componentInstance.title).toEqual('pricelinkr-ui');
  });

  it('should set username and isLoggedIn if user in localStorage', () => {
    localStorage.setItem('pricelinkr-user', 'testuser');
    const themeMock = { isDarkMode: jest.fn().mockReturnValue(false) };
    const fixture = MockRender(AppComponent, undefined, {
      providers: [{ provide: ThemeService, useValue: themeMock }],
    });
    const comp = fixture.point.componentInstance;
    expect(comp.username).toBe('testuser');
    expect(comp.isLoggedIn).toBe(true);
    localStorage.removeItem('pricelinkr-user');
  });

  it('should set isDarkMode from ThemeService', () => {
    const themeMock = { isDarkMode: jest.fn().mockReturnValue(true) };
    const fixture = MockRender(AppComponent, undefined, {
      providers: [{ provide: ThemeService, useValue: themeMock }],
    });
    expect(fixture.point.componentInstance.isDarkMode).toBe(true);
  });

  it('should toggle dark mode', () => {
    const setDarkMode = jest.fn();
    const themeMock = {
      isDarkMode: jest.fn().mockReturnValue(false),
      setDarkMode,
    };
    const fixture = MockRender(AppComponent, undefined, {
      providers: [{ provide: ThemeService, useValue: themeMock }],
    });
    const comp = fixture.point.componentInstance;
    comp.toggleDarkMode();
    expect(comp.isDarkMode).toBe(true);
    expect(setDarkMode).toHaveBeenCalledWith(true);
    comp.toggleDarkMode();
    expect(comp.isDarkMode).toBe(false);
    expect(setDarkMode).toHaveBeenCalledWith(false);
  });
});
