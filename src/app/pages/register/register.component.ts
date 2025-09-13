import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  onRegister(event: Event) {
    event.preventDefault();
    // Simula registro: guarda usuario y navega
    localStorage.setItem('pricelinkr-user', 'usuarioDemo');
  this.router.navigate(['/dashboard']).then(() => window.location.reload());
  }
}
