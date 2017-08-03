import { Injectable } from '@angular/core';
import { BaThemeConfigProvider, ColorHelper } from '../../../shared/theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig: BaThemeConfigProvider) {
  }

  getData() {
    const pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.newVisits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.purchases',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.activeUsers',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'dashboard.returned',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
