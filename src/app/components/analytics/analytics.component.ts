import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [NgApexchartsModule],
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

  public barChartSeries: ApexAxisChartSeries = [
    {
      name: 'Ahorro (€)',
      data: this.monthlySavings.map((m) => m.value),
    },
  ];
  public barChartOptions = {
    chart: {
      type: 'bar' as const,
      height: 300,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '55%',
        borderRadius: 8,
      },
    },
    xaxis: {
      categories: this.monthlySavings.map((m) => m.month),
    },
    dataLabels: { enabled: true },
    title: { text: 'Ahorro mensual estimado', align: 'left' as const },
  };

  public pieChartSeries: ApexNonAxisChartSeries =
    this.mostComparedCategories.map((c) => c.count);
  public pieChartOptions = {
    chart: {
      type: 'pie' as const,
      height: 300,
    },
    labels: this.mostComparedCategories.map((c) => c.name),
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' as const },
        },
      },
    ],
    legend: { position: 'right' as const },
  };
}
