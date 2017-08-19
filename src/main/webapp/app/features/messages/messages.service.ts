import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SocketService } from '../../core/services/socket.service';

@Injectable()
export class MessagesService {
    public resource$: Observable<any>;
    private observable;
    private socketMessagesService;

    constructor(private socketService: SocketService) {
        // this.socketMessagesService = socketService.getService('messages')

        // this.item$ is a public observable for components to subscribe
        this.resource$ = new Observable((observable) => this.observable = observable);

        this.socketMessagesService.on('created', (res) => {
            this.observable.next({
                type: 'created',
                messages: res
            });
        });

    }

    findMessages() {
        this.socketMessagesService.find({
            query: {
                $sort: { createdAt: -1 }
            }
        }).then((res) => {
            this.observable.next({
                type: 'find',
                messages: res.data
            });
        });
    }

    createMessage(data) {
        Observable.fromPromise(this.socketMessagesService.create(data))
            .catch(this.handleError);
    }

    handleError(err: Response | any) {
        err = err instanceof Response ? err.json() : err.toString();
        console.error(err);
        return Observable.throw(err);
    }

    off() {
        this.socketMessagesService.removeAllListeners('created');
    }

}
