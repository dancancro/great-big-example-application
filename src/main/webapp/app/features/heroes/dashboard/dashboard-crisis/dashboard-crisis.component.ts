import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Crisis } from '../../../../core/store/crisis/crisis.model';

@Component({
  selector: 'jhi-dashboard-crisis',
  templateUrl: './dashboard-crisis.component.html',
  styleUrls: ['./dashboard-crisis.component.scss']
})
export class DashboardCrisisComponent {
  @Input() crisis: Crisis;
  @Output() selected = new EventEmitter<Crisis>();
  click() { this.selected.emit(this.crisis); }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
