import { AfterViewInit, Component } from '@angular/core';
import {
  bootstrap1SquareFill,
  bootstrap2SquareFill,
  bootstrap3SquareFill,
  bootstrapDot,
  bootstrapGraphUp,
  bootstrapRocketTakeoffFill,
  bootstrapSearch,
  bootstrapTrophy,
} from '@ng-icons/bootstrap-icons';
import { provideIcons } from '@ng-icons/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  viewProviders: [
    provideIcons({
      bootstrapTrophy,
      bootstrapGraphUp,
      bootstrapSearch,
      bootstrapRocketTakeoffFill,
      bootstrapDot,
      bootstrap1SquareFill,
      bootstrap2SquareFill,
      bootstrap3SquareFill,
    }),
  ],
})
export class LandingComponent implements AfterViewInit {
  typeWriterText = 'Busca un servicio B2B y compara precios al instante...';
  typeWriterSpeed = 50;
  typeWriterIndex = 0;
  typeWriterDisplay = '';

  ngAfterViewInit(): void {
    this.typeWriterDisplay = '';
    this.typeWriterIndex = 0;
    this.startTypewriter();
  }

  private startTypewriter() {
    if (this.typeWriterIndex < this.typeWriterText.length) {
      this.typeWriterDisplay += this.typeWriterText.charAt(
        this.typeWriterIndex,
      );
      this.typeWriterIndex++;
      setTimeout(() => this.startTypewriter(), this.typeWriterSpeed);
    }
  }
}
