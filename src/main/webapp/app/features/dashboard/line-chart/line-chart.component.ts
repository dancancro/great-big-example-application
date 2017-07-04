import { Component } from '@angular/core';

import { LineChartService } from './line-chart.service';

@Component({
  selector: 'jhi-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChart {

  chartData: Object;

  constructor(private _lineChartService: LineChartService) {
    this.chartData = this._lineChartService.getData();
  }

  initChart(chart: any) {
    const zoomChart = () => {
      chart.zoomToDates(new Date(2013, 3), new Date(2014, 0));
    };

    chart.addListener('rendered', zoomChart);
    zoomChart();

    if (chart.zoomChart) {
      chart.zoomChart();
    }
  }
}
