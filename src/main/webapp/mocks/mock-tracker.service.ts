import { SpyObject } from './spyobject';
import { JhiTrackerService } from '../app/shared/tracker/tracker.service';

export class MockTrackerService extends SpyObject {

    constructor() {
        super(JhiTrackerService);
    }

    connect() { }
}
