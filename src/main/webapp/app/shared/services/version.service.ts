import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface VersionMeta {
    version: string;
    readme: string;
}

@Injectable()
export class VersionService {
    public meta: VersionMeta = null;

    private _promise: Promise<void>;

    constructor(http: Http) {
        this._promise = new Promise<void>((resolve) => {
            http.get('version.json').subscribe((res: Response) => {
                this.meta = res.json();
                resolve();
            });
        });
    }

    getMeta(): Promise<VersionMeta> {
        return this._promise.then(() => this.meta);
    }
}
