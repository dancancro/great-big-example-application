import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { ContactPage }    from './contact.page';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: ContactPage}
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/