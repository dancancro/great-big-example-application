import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { SocialRegisterComponent } from './social-register.component';
import { SocialAuthComponent } from './social-auth.component';

export const socialRegisterRoute: Route = {
    path: 'social-register/:provider?{success:boolean}',
    component: SocialRegisterComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [UserRouteAccessService]
};

export const socialAuthRoute: Route = {
    path: 'social-auth',
    component: SocialAuthComponent,
    data: {
        authorities: [],
        pageTitle: 'social.register.title'
    },
    canActivate: [UserRouteAccessService]
};
