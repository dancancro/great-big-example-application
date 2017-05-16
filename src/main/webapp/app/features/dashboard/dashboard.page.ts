import { Component, OnInit } from '@angular/core';
import { TodoComponent } from '../../shared/widgets';

@Component({
    selector: 'jhi-dashboard-page',
    templateUrl: 'dashboard.page.html'
})

export class DashboardPage implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('This is dashboard module');
    }
}
