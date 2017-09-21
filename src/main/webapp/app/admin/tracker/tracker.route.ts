import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiTrackerComponent } from './tracker.component';
import { JhiTrackerService } from '../../shared';

export const trackerRoute: Route = {
    path: 'jhi-tracker',
    component: JhiTrackerComponent,
    data: {
        pageTitle: 'tracker.title'
    }
};
