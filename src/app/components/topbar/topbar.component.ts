import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  imports: [RouterLink],
})
export class TopbarComponent {
  @Input() username!: string;
  private readonly router = inject(Router);

  logout(): void {
    void this.router.navigate(['/register']);
  }
}
