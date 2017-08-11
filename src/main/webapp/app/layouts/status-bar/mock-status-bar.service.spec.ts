import { Injectable } from '@angular/core';

import { StatusBarService } from './status-bar.service';

@Injectable()
export class MockStatusBarService extends StatusBarService {
    constructor() {
        super(null);
    }
    onInit() {

    }
    setActive(newValue) {

    }
}
