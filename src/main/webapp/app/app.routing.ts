import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { errorRoute } from './layouts';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
    { path: '', component: NavbarComponent, outlet: 'navbar' },
    { path: '', component: HomeComponent }, // eager loaded because it uses i18n. TODO: fix when jhipster supports this
    { path: 'about', loadChildren: './features/about/about.module#AboutModule' },
    { path: 'legal', loadChildren: './features/legal/legal.module#LegalModule' },
    { path: 'meals', loadChildren: './features/meals/meals.module#MealsModule' },
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
