import { Component, inject, OnInit } from '@angular/core';
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
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [NgIcon],
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
export class LandingComponent implements OnInit {
  typeWriterText = 'Busca un servicio B2B y compara precios al instante...';
  typeWriterSpeed = 50;
  typeWriterIndex = 0;

  private readonly document = inject(DOCUMENT);

  ngOnInit(): void {
    const title = this.document.getElementById('type-writer');
    let typeWriterInterval: any;

    const typeWriter = () => {
      const title = this.document.getElementById('type-writer');
      if (!title) {
        return;
      }
      if (this.typeWriterIndex < this.typeWriterText.length) {
        title.innerHTML += this.typeWriterText.charAt(this.typeWriterIndex);
        this.typeWriterIndex++;
      } else {
        clearInterval(typeWriterInterval);
      }
    }

    if (!title) { return; }
    title .innerText = '';
    typeWriterInterval = setInterval(() => {
      typeWriter();
    }, this.typeWriterSpeed);
  }
}
