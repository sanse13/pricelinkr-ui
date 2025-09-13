import { Injectable } from '@angular/core';
import { ApexAxisChartSeries, ApexNonAxisChartSeries } from 'ng-apexcharts';

@Injectable()
export class AnalyticsService {
  getMonthlySavings() {
    return [
      { month: 'Abr', value: 12 },
      { month: 'May', value: 25 },
      { month: 'Jun', value: 18 },
      { month: 'Jul', value: 30 },
      { month: 'Ago', value: 22 },
      { month: 'Sep', value: 35 },
    ];
  }

  getMostComparedCategories() {
    return [
      { name: 'Electronics', count: 14 },
      { name: 'Books', count: 9 },
      { name: 'Clothing', count: 7 },
      { name: 'Home & Kitchen', count: 5 },
    ];
  }

  getBestStores() {
    return [
      { name: 'Amazon', savings: 40 },
      { name: 'eBay', savings: 32 },
      { name: 'Zara', savings: 12 },
    ];
  }

  getBarChartSeries(): ApexAxisChartSeries {
    const monthlySavings = this.getMonthlySavings();
    return [
      {
        name: 'Ahorro (€)',
        data: monthlySavings.map((m) => m.value),
      },
    ];
  }

  getBarChartOptions() {
    const monthlySavings = this.getMonthlySavings();
    return {
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
        categories: monthlySavings.map((m) => m.month),
      },
      dataLabels: { enabled: true },
      title: { text: 'Ahorro mensual estimado', align: 'left' as const },
    };
  }

  getPieChartSeries(): ApexNonAxisChartSeries {
    const categories = this.getMostComparedCategories();
    return categories.map((c) => c.count);
  }

  getPieChartOptions() {
    const categories = this.getMostComparedCategories();
    return {
      chart: {
        type: 'pie' as const,
        height: 300,
      },
      labels: categories.map((c) => c.name),
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
}
