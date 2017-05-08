import { NgModule } from '@angular/core';

import { GameSharedModule } from '../shared/shared.module';
import { SinglePlayerComponent } from './single-player.component';

@NgModule({
    imports: [GameSharedModule],
    declarations: [SinglePlayerComponent],
    exports: [SinglePlayerComponent]
})
export class SinglePlayerModule { }
