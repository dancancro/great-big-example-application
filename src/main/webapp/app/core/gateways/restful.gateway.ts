import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { GAME_TEXT } from '../../features/game/config/config';
import { RestfulCommand } from '../commands/restful.command';
import { BaseGateway } from './base.gateway';
import { AppConfig } from '../../app.config';

const endpoints = {
    game: 'game',
    messages: 'messages'
};

// Mocking backend validation behavior.
@Injectable()
export class RestfulGateway extends BaseGateway {
    private lastText = '';
    private lastTime = 0;

    constructor(private http: Http, private config: AppConfig) {
        super();
    }

    send(command: RestfulCommand): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            const currentText = (command.payload as any).text;
            const currentTime = (command.payload as any).time;

            // let status = 200;
            // if (currentText.length - this.lastText.length > 10 && currentTime - this.lastTime < 2000) {
            //     status = 403;
            // }

            this.lastText = currentText;
            this.lastTime = currentTime;

            if (GAME_TEXT === this.lastText) {
                this.lastText = '';
            }

            return this.http.post(`${this.config.apiUrl}/${endpoints[command.payload.topic]}`, command.payload)
                .map(this.extractData)
                .catch(this.handleError);

            //   const response = new Response(new ResponseOptions({
            //     body: null,
            //     status,
            //     headers: null,
            //     statusText: null,
            //     type: null,
            //     url: null
            //   }));
            //   return status === 200 ? observer.next(response) : observer.error(response);
        });
    }

    extractData(res: any) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }

        const obj =
            (res && !!res._body && res.json()) ||
            res.data ||
            { id: res.url.match(/[^\/]+$/)[0] };

        return obj;
    }

    handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        const id = error.url.match(/[^\/]+$/)[0]; // if DELETE_FAIL, get id from resp.url

        return Observable.throw({ errMsg, id });
    }
}
