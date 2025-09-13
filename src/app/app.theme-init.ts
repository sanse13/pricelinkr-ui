import { ThemeService } from './services/theme.service';

export function applyThemeOnLoad() {
  const theme = new ThemeService();
  theme.applyThemeOnLoad();
}

applyThemeOnLoad();
