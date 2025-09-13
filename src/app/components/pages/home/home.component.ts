import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import data from '../../../../../fake-data.json';

interface Category {
  id: number;
  name: string;
}

interface ProductPrice {
  store: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  categoryId: number;
  prices: ProductPrice[];
  minPrice?: number;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, CurrencyPipe, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  categories: Category[] = [];
  products: Product[] = [];
  comparedProducts: Product[] = [];

  selectedCategory = new FormControl<number | undefined>(undefined);

  constructor() {
    this.categories = data.categories;
    this.products = data.products;
    this.selectedCategory.setValue(1);
  }

  comparePrices(): void {
    const selectedCategoryId = Number(this.selectedCategory.value);
    if (this.selectedCategory.value) {
      this.comparedProducts = this.products
        .filter((p) => p.categoryId === selectedCategoryId)
        .map((product) => ({
          ...product,
          minPrice: Math.min(...product.prices.map((pr) => pr.price)),
        }));
    }
  }
}
