// re-export for tester convenience
export { Crisis } from '../crisis';
export { CrisisService } from '../crisis.service';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

export const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

let crisesPromise = Promise.resolve(CRISES);

export class FakeCrisisService implements CrisisService {

  crises = CRISES.map(c => c.clone());
  lastPromise: Promise<any>;  // remember so we can spy on promise calls

  getCrisis(id: number | string) {
    if (typeof id === 'string') {
      id = parseInt(id as string, 10);
    }
    let crisis = this.crises.find(h => h.id === id);
    return this.lastPromise = Promise.resolve(crisis);
  }

  getCrises() {
    return this.lastPromise = Promise.resolve<Crisis[]>(this.crises);
  }

  updateCrisis(crisis: Crisis): Promise<Crisis> {
    return this.lastPromise = this.getCrisis(crisis.id).then(h => {
      return h ?
        Object.assign(h, crisis) :
        Promise.reject(`Crisis ${crisis.id} not found`) as any as Promise<Crisis>;
    });
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      crisesPromise.then(crises => crises.push(crisis));
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/