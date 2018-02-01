import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ProfileInfo } from './profile-info.model';

@Injectable()
export class ProfileService {

    private profileInfoUrl = 'api/profile-info';

    constructor(private http: HttpClient) { }

    getProfileInfo(): Observable<ProfileInfo> {
        return this.http.get(this.profileInfoUrl)
            .map((res: Response) => {
                const data = res.json();
                const pi = new ProfileInfo();
                pi.activeProfiles = data.activeProfiles;
                pi.ribbonEnv = data.ribbonEnv;
                pi.inProduction = data.activeProfiles.indexOf('prod') !== -1;
                pi.swaggerEnabled = data.activeProfiles.indexOf('swagger') !== -1;
                return pi;
            });
    }
}
