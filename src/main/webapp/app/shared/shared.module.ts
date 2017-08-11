import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    AccountService,
    AuthServerProvider,
    CSRFService,
    GreatBigExampleApplicationSharedLibsModule,
    GreatBigExampleApplicationSharedCommonModule,
    HasAnyAuthorityDirective,
    JhiLoginModalComponent,
    JhiSocialComponent,
    JhiTrackerService,
    LoginModalService,
    LoginService,
    Principal,
    SocialService,
    StateStorageService
} from './';

import { DraggableDirective } from './draggable/draggable.directive';
// import { RioAlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { ContainerComponent } from './container/container.component';
// import { RioInputComponent } from './input/input.component';
// import { RioFormComponent } from './form/form.component';
// import { RioFormErrorComponent } from './form-error/form-error.component';
// import { RioFormGroupComponent } from './form-group/form-group.component';
// import { RioLabelComponent } from './label/label.component';
import { AwesomePipe } from './awesome/awesome.pipe';
// import { HighlightDirective } from './highlight/highlight.directive';
// import { TitleCasePipe } from './title-case/title-case.pipe';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';
import { WelcomeComponent } from './welcome/welcome.component';
// import { GameComponent } from '../features/game/game.component';
// import { TimerComponent } from '../features/game/timer/timer.component';
import { LayoutsModule } from '../layouts/layouts.module';
// import { StatusBarComponent } from '../layouts/status-bar/status-bar.component';
import { NavComponent } from '../layouts/nav/nav.component';
import { SkipNavComponent } from '../layouts/skip-nav/skip-nav.component';
import { UiModule } from './ui/ui.module';
import { MealsLayoutComponent } from '../layouts/meals-layout/meals-layout.component';
import { ImageCoverComponent } from './image-cover/image-cover.component';

export const components = [
    DraggableDirective,
    // RioAlertComponent,
    ButtonComponent,
    ContainerComponent,
    // RioInputComponent,
    // RioFormComponent,
    // RioFormErrorComponent,
    // RioFormGroupComponent,
    // RioLabelComponent,
    AwesomePipe,
    // HighlightDirective,
    // TitleCasePipe,
    TwainComponent,
    WelcomeComponent,
    // GameComponent,
    // TimerComponent,
    NavComponent,
    SkipNavComponent,
    // MealsLayoutComponent,
    ImageCoverComponent
];

@NgModule({
    imports: [
        GreatBigExampleApplicationSharedLibsModule,
        GreatBigExampleApplicationSharedCommonModule,
        UiModule,
        // LayoutsModule,
        RouterModule
    ],
    declarations: [
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        ...components
    ],
    providers: [
        LoginService,
        LoginModalService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        JhiTrackerService,
        AuthServerProvider,
        SocialService,
        DatePipe,
        TwainService
    ],
    entryComponents: [JhiLoginModalComponent],
    exports: [
        // GreatBigExampleApplicationSharedLibsModule,
        GreatBigExampleApplicationSharedCommonModule,
        UiModule,
        JhiSocialComponent,
        JhiLoginModalComponent,
        HasAnyAuthorityDirective,
        DatePipe,
        // LayoutsModule,
        ...components
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GreatBigExampleApplicationSharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: GreatBigExampleApplicationSharedModule
        };
    }

}
