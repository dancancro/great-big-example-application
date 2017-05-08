import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { TimerComponent } from './shared/timer/timer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { GameModel } from '../../core/store/game/game.model';
import { RestfulGateway } from '../../core/gateways/restful.gateway';
import { HomeComponent } from './home/home.component';
import { GamePage } from './game.page';
import { RoomConfig } from './config/config';
import { SinglePlayerModule } from './single-player/single-player.module';
import { MultiPlayerModule } from './multi-player/multi-player.module';
import { routes } from './game.routes';
import { GreatBigExampleApplicationSharedModule } from '../../shared/shared.module';
import { GameSharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        GreatBigExampleApplicationSharedModule,
        GameSharedModule,
        MultiPlayerModule,
        RouterModule.forChild(routes),
        SinglePlayerModule],
    declarations: [
        GamePage,
        NavbarComponent,
        ToolbarComponent,
        HomeComponent],
    exports: [
        NavbarComponent,
        ToolbarComponent],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        GameModel,
        RestfulGateway,
        RoomConfig]
})
export class GameModule { }
