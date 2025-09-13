import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkModeKey = 'pricelinkr-dark-mode';

  isDarkMode(): boolean {
    return (
      localStorage.getItem(this.darkModeKey) === 'true' ||
      (localStorage.getItem(this.darkModeKey) === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }

  setDarkMode(enabled: boolean) {
    localStorage.setItem(this.darkModeKey, String(enabled));
    if (enabled) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  toggleDarkMode() {
    this.setDarkMode(!this.isDarkMode());
  }

  applyThemeOnLoad() {
    this.setDarkMode(this.isDarkMode());
  }
}
