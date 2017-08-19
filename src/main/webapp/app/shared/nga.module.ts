import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { GreatBigExampleApplicationSharedModule } from '../shared';
import { TranslateModule } from '@ngx-translate/core';

import { BaThemeConfig } from './theme/theme.config';

import { BaThemeConfigProvider } from './theme/theme.config-provider';

import {
    BaAmChart,
    BaAppPicturePipe,
    BaBackTop,
    BaCard,
    BaChartistChart,
    BaCheckbox,
    BaContentTop,
    BaFullCalendar,
    BaKameleonPicturePipe,
    BaMenu,
    BaMenuItem,
    BaMsgCenter,
    BaMultiCheckbox,
    BaPageTop,
    BaProfilePicturePipe,
    BaScrollPositionDirective,
    BaSidebar,
    BaSlimScrollDirective,
    BaThemeRunDirective
} from './ba';

import { BaCardBlurDirective } from './ba/ba-card/ba-card-blur.directive';

import { BaImageLoaderService, BaMenuService, BaThemePreloader, BaThemeSpinner } from './services';

import { EmailValidator, EqualPasswordsValidator } from './validators';

const NGA_COMPONENTS = [
    BaAmChart,
    BaBackTop,
    BaCard,
    BaChartistChart,
    BaCheckbox,
    BaContentTop,
    BaFullCalendar,
    BaMenuItem,
    BaMenu,
    BaMsgCenter,
    BaMultiCheckbox,
    BaPageTop,
    BaSidebar
];

const NGA_DIRECTIVES = [
    BaScrollPositionDirective,
    BaSlimScrollDirective,
    BaThemeRunDirective,
    BaCardBlurDirective
];

const NGA_PIPES = [
    BaAppPicturePipe,
    BaKameleonPicturePipe,
    BaProfilePicturePipe
];

const NGA_SERVICES = [
    BaImageLoaderService,
    BaThemePreloader,
    BaThemeSpinner,
    BaMenuService
];

const NGA_VALIDATORS = [
    EmailValidator,
    EqualPasswordsValidator
];

@NgModule({
    declarations: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        GreatBigExampleApplicationSharedModule,
        NgUploaderModule,
        TranslateModule
    ],
    exports: [
        ...NGA_PIPES,
        ...NGA_DIRECTIVES,
        ...NGA_COMPONENTS,
        TranslateModule
    ]
})
export class NgaModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
            ngModule: NgaModule,
            providers: [
                BaThemeConfigProvider,
                BaThemeConfig,
                ...NGA_VALIDATORS,
                ...NGA_SERVICES
            ],
        };
    }
}
