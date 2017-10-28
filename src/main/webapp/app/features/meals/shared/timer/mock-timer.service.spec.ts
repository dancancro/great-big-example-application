import { Injectable } from '@angular/core';

import { TimerService } from './timer.service';

@Injectable()
export class MockTimerService extends TimerService {
    constructor() {
        super(null, null);
    }
}
