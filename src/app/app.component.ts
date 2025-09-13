import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, TopbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pricelinkr-ui';
  username = '';
  isDarkMode = false;
  isLoggedIn = false;

  constructor(private theme: ThemeService) {
    this.isDarkMode = this.theme.isDarkMode();
    // Simulación: comprobar si hay usuario en localStorage
    const user = localStorage.getItem('pricelinkr-user');
    if (user) {
      this.username = user;
      this.isLoggedIn = true;
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.theme.setDarkMode(this.isDarkMode);
  }
}
