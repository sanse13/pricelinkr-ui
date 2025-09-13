import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  standalone: true,
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  monthlySavings = [
    { month: 'Abr', value: 12 },
    { month: 'May', value: 25 },
    { month: 'Jun', value: 18 },
    { month: 'Jul', value: 30 },
    { month: 'Ago', value: 22 },
    { month: 'Sep', value: 35 },
  ];

  mostComparedCategories = [
    { name: 'Electronics', count: 14 },
    { name: 'Books', count: 9 },
    { name: 'Clothing', count: 7 },
    { name: 'Home & Kitchen', count: 5 },
  ];

  bestStores = [
    { name: 'Amazon', savings: 40 },
    { name: 'eBay', savings: 32 },
    { name: 'Zara', savings: 12 },
  ];
}
