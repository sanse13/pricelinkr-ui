import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
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

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [NgIcon, RouterLink],
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
  @ViewChild('typeWriter') typeWriterEl!: ElementRef;

  typeWriterText = 'Busca un servicio B2B y compara precios al instante...';
  typeWriterSpeed = 50;
  typeWriterIndex = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.startTypewriter();
  }

  private startTypewriter() {
    if (!this.typeWriterEl) {
      return;
    }

    this.renderer.setProperty(
      this.typeWriterEl.nativeElement,
      'textContent',
      '',
    );
    this.typeWriterIndex = 0;

    const type = () => {
      if (this.typeWriterIndex < this.typeWriterText.length) {
        const char = this.typeWriterText.charAt(this.typeWriterIndex);
        this.renderer.setProperty(
          this.typeWriterEl.nativeElement,
          'textContent',
          this.typeWriterEl.nativeElement.innerText + char,
        );
        this.typeWriterIndex++;
        setTimeout(type, this.typeWriterSpeed);
      }
    };

    type();
  }
}
