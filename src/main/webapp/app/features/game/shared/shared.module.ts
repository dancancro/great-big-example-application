import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameComponent } from './game/game.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        GameComponent,
        TimerComponent],
    exports: [
        CommonModule,
        GameComponent,
        TimerComponent],
    providers: []
})
export class GameSharedModule { }
