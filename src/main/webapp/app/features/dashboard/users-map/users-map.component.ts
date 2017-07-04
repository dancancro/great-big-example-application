import { Component } from '@angular/core';

import { UsersMapService } from './users-map.service';

@Component({
    selector: 'jhi-users-map',
    templateUrl: './users-map.component.html',
    styleUrls: ['./users-map.component.scss']
})
export class UsersMap {

    mapData: Object;

    constructor(private _usersMapService: UsersMapService) {
        this.mapData = this._usersMapService.getData();
    }
}
