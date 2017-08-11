import { Component, ViewChild, Input, Output, ElementRef, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

import { BaThemePreloader } from '../../../shared/services';

import 'amcharts3';
import 'amcharts3/amcharts/plugins/responsive/responsive.js';
import 'amcharts3/amcharts/serial.js';

import 'ammap3';
import '../../../../../../../node_modules/ammap3/ammap/maps/js/worldLow';

import { BaAmChartThemeService } from './ba-am-chart-theme.service';

@Component({
    selector: 'ba-am-chart',
    templateUrl: './ba-am-chart.component.html',
    styleUrls: ['./ba-am-chart.component.scss'],
    providers: [BaAmChartThemeService],
})
export class BaAmChart implements OnInit, AfterViewInit {

    @Input() baAmChartConfiguration: Object;
    @Input() baAmChartClass: string;
    @Output() onChartReady = new EventEmitter<any>();

    @ViewChild('baAmChart') public _selector: ElementRef;

    constructor(private _baAmChartThemeService: BaAmChartThemeService) {
        this._loadChartsLib();
    }

    ngOnInit() {
        AmCharts.themes.blur = this._baAmChartThemeService.getTheme();
    }

    ngAfterViewInit() {
        const chart = AmCharts.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
        this.onChartReady.emit(chart);
    }

    private _loadChartsLib(): void {
        BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
            const amChartsReadyMsg = 'AmCharts ready';

            if (AmCharts.isReady) {
                resolve(amChartsReadyMsg);
            } else {
                AmCharts.ready(function() {
                    resolve(amChartsReadyMsg);
                });
            }
        }));
    }
}
