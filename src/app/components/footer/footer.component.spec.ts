import { MockBuilder, MockRender } from 'ng-mocks';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  beforeEach(() => MockBuilder(FooterComponent));

  it('should create', () => {
    const fixture = MockRender(FooterComponent);
    expect(fixture.point.componentInstance).toBeTruthy();
  });

  it('should render footer text and links', () => {
    const fixture = MockRender(FooterComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('PriceLinkr');
    expect(fixture.nativeElement.textContent).toContain('About');
    expect(fixture.nativeElement.textContent).toContain('Privacy Policy');
    expect(fixture.nativeElement.textContent).toContain('Licensing');
    expect(fixture.nativeElement.textContent).toContain('Contact');
  });
});
