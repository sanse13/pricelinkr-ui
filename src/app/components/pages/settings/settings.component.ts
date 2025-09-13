import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  darkMode = false;

  constructor(private theme: ThemeService) {
    this.darkMode = this.theme.isDarkMode();
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onDarkModeToggle() {
    this.theme.setDarkMode(this.darkMode);
  }
}
