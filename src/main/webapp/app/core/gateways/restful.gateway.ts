import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/merge';

import { GAME_TEXT } from '../../features/game/config/config';
import { RestfulCommand } from '../commands/restful.command';
import { Gateway } from './base.gateway';

// Mocking backend validation behavior.
@Injectable()
export class RestfulGateway extends Gateway {
    private lastText = '';
    private lastTime = 0;

    send(command: RestfulCommand): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            const currentText = (command.payload as any).text;
            const currentTime = (command.payload as any).time;

            let status = 200;
            if (currentText.length - this.lastText.length > 10 && currentTime - this.lastTime < 2000) {
                status = 403;
            }

            this.lastText = currentText;
            this.lastTime = currentTime;

            if (GAME_TEXT === this.lastText) {
                this.lastText = '';
            }
            const response = new Response(new ResponseOptions({
                body: null,
                status,
                headers: null,
                statusText: null,
                type: null,
                url: null
            }));
            return status === 200 ? observer.next(response) : observer.error(response);
        });
    }
}
