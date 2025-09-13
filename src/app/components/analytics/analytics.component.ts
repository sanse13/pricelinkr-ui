import { Component, inject } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { AnalyticsService } from './analytics.service';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [NgApexchartsModule],
  providers: [AnalyticsService],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss',
})
export class AnalyticsComponent {
  public barChartSeries: ApexAxisChartSeries;
  public barChartOptions: any;
  public pieChartSeries: ApexNonAxisChartSeries;
  public pieChartOptions: any;
  public bestStores: { name: string; savings: number }[];

  private readonly analyticsService = inject(AnalyticsService);

  constructor() {
    this.barChartSeries = this.analyticsService.getBarChartSeries();
    this.barChartOptions = this.analyticsService.getBarChartOptions();
    this.pieChartSeries = this.analyticsService.getPieChartSeries();
    this.pieChartOptions = this.analyticsService.getPieChartOptions();
    this.bestStores = this.analyticsService.getBestStores();
  }
}
