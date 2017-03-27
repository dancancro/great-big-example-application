import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Contact } from './contact.model';
import { slices } from '../util';
import { DataService } from '../../services/data.service';
import * as functions from '../entity/entity.functions';

@Injectable()
export class ContactEffects {
  @Effect()
  private loadFromRemote$ = functions.loadFromRemote$(this.actions$, slices.CONTACT, this.dataService);
  @Effect()
  private updateToRemote$ = functions.updateToRemote$(this.actions$, slices.CONTACT, this.dataService, this.store);

  constructor(
    private store: Store<Contact>,
    private actions$: Actions,
    private dataService: DataService
  ) { }
}

