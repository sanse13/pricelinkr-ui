import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import data from '../../../../../fake-data.json';
import { ComparedProductItemComponent } from '../../compared-products/compared-product-item/compared-product-item.component';

interface Category {
  id: number;
  name: string;
}

interface ProductPrice {
  store: string;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  categoryId: number;
  prices: ProductPrice[];
  minPrice?: number;
}

@Component({
  selector: 'app-home',
  imports: [FormsModule, ReactiveFormsModule, ComparedProductItemComponent],
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

  clearFilter(): void {
    this.comparedProducts = [];
  }
}
