import {
    Component,
    ViewChild,
    Input,
    Output,
    ElementRef,
    EventEmitter,
    AfterViewInit,
    OnChanges,
    OnDestroy
} from '@angular/core';

import * as Chartist from 'chartist';

@Component({
    selector: 'ba-chartist-chart',
    templateUrl: 'ba-chartist-chart.component.html',
    providers: [],
})
export class BaChartistChart implements AfterViewInit, OnChanges, OnDestroy {

    @Input() baChartistChartType: string;
    @Input() baChartistChartData: Object;
    @Input() baChartistChartOptions: Object;
    @Input() baChartistChartResponsive: Object;
    @Input() baChartistChartClass: string;
    @Output() onChartReady = new EventEmitter<any>();

    @ViewChild('baChartistChart') public _selector: ElementRef;

    private chart;

    ngAfterViewInit() {
        this.chart = new Chartist[this.baChartistChartType](this._selector.nativeElement, this.baChartistChartData, this.baChartistChartOptions, this.baChartistChartResponsive);
        this.onChartReady.emit(this.chart);
    }

    ngOnChanges(changes) {
        if (this.chart) {
            (<any>this.chart).update(this.baChartistChartData, this.baChartistChartOptions);
        }
    }

    ngOnDestroy(): void {
        if (this.chart) {
            this.chart.detach();
        }
    }
}
