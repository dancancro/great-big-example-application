import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../shared/nga.module';
import { TranslateModule, TranslateLoader, TranslateParser, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader, } from '@ngx-translate/http-loader';
import { translatePartialLoader, missingTranslationHandler } from 'ng-jhipster';
import { JhiConfigService } from 'ng-jhipster/src/config.service';

import { DashboardPage } from './dashboard.page';
import { DashboardRouting } from './dashboard.routing';
import { GreatBigExampleApplicationSharedModule } from '../../shared';
import { PopularApp } from './popular-app/popular-app.component';
import { PieChart } from './pie-chart/pie-chart.component';
import { TrafficChart } from './traffic-chart/traffic-chart.component';
import { UsersMap } from './users-map/users-map.component';
import { LineChart } from './line-chart/line-chart.component';
import { Feed } from './feed/feed.component';
import { Todo } from './todo/todo.component';
import { Calendar } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';
import { FeedService } from './feed/feed.service';
import { LineChartService } from './line-chart/line-chart.service';
import { PieChartService } from './pie-chart/pie-chart.service';
import { TodoService } from './todo/todo.service';
import { TrafficChartService } from './traffic-chart/traffic-chart.service';
import { UsersMapService } from './users-map/users-map.service';
import { customHttpProvider } from '../../core/interceptor/http.provider';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//     return new TranslateHttpLoader(http, 'content/i18n/', '.json');
// }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GreatBigExampleApplicationSharedModule,
    NgaModule,
    DashboardRouting
  ],
  declarations: [
    PopularApp,
    PieChart,
    TrafficChart,
    UsersMap,
    LineChart,
    Feed,
    Todo,
    Calendar,
    DashboardPage
  ],
  providers: [
    customHttpProvider(),
    CalendarService,
    FeedService,
    LineChartService,
    PieChartService,
    TodoService,
    TrafficChartService,
    UsersMapService
  ]
})
export class DashboardModule { }
