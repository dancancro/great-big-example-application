import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { RESTService } from '../../../../core/services/rest.service';
import { Crisis } from '../../../../core/store/crisis/crisis.model';
import { slices } from '../../../../core/store/util';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
  constructor(private ds: RESTService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Crisis> {
    let id = route.params['id'];

    return this.ds.getEntity(id, 'crisis').toPromise().then(crisis => {
      if (crisis) {
        return crisis;
      } else { // id not found
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
