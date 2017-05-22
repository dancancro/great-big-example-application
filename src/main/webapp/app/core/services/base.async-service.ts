import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

export abstract class BaseAsyncService {
  abstract process(data: Action): Observable<any>;
}
