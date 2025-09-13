import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Comparison {
  id: number;
  productName: string;
  date: string;
  bestPrice: number;
  bestStore: string;
  saved: number;
}

interface WatchedProduct {
  id: number;
  name: string;
  currentPrice: number;
  lastPrice: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  comparisons: Comparison[] = [
    {
      id: 1,
      productName: 'Smartphone X',
      date: '2025-09-10',
      bestPrice: 670,
      bestStore: 'eBay',
      saved: 29,
    },
    {
      id: 2,
      productName: 'Laptop Pro',
      date: '2025-09-08',
      bestPrice: 1150,
      bestStore: 'eBay',
      saved: 50,
    },
    {
      id: 3,
      productName: 'Bestseller Book',
      date: '2025-09-05',
      bestPrice: 18,
      bestStore: 'eBay',
      saved: 2,
    },
    {
      id: 4,
      productName: 'T-Shirt Basic',
      date: '2025-09-01',
      bestPrice: 13,
      bestStore: 'eBay',
      saved: 2,
    },
  ];

  watchedProducts: WatchedProduct[] = [
    { id: 101, name: 'Smartphone X', currentPrice: 670, lastPrice: 699 },
    { id: 201, name: 'Bestseller Book', currentPrice: 18, lastPrice: 20 },
  ];

  get totalComparisons() {
    return this.comparisons.length;
  }
  get totalSaved() {
    return this.comparisons.reduce((acc, c) => acc + c.saved, 0);
  }
  get lastComparison() {
    return this.comparisons[0];
  }
}
