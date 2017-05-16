import { Route } from '@angular/router';

import { UserRouteAccessService } from '../shared';
import { HomePage } from './';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomePage,
  data: {
    authorities: [],
    pageTitle: 'home.title'
  }
};
