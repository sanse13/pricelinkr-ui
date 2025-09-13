import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(event: Event) {
    event.preventDefault();
    // Simula login: guarda usuario y navega
    localStorage.setItem('pricelinkr-user', 'usuarioDemo');
    this.router.navigate(['/dashboard']).then(() => window.location.reload());
  }
}
