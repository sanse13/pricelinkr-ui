import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '../../pages/home/home.component';

@Component({
  selector: 'app-compared-product-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './compared-product-item.component.html',
  styleUrl: './compared-product-item.component.scss',
})
export class ComparedProductItemComponent {
  product = input.required<Product>();
}
