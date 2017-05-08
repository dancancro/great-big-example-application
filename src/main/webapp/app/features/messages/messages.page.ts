import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GridOptions } from 'ag-grid/main';

import { Principal } from '../../shared';
import { SocketService } from '../../core/services/socket.service';
import * as EntityActions from '../../core/store/entity/entity.actions';

@Component({
    selector: 'message',
    templateUrl: 'messages.page.html'
})

export class MessagesPage implements OnInit, OnDestroy {
    private message$: Observable<any>;
    private messageSubscription: any;
    public gridOptions: GridOptions;
    public columnDefs: any[];
    public messages = [];
    public email: string;
    public message: string;

    constructor(
        private store: Store<any>,
        private socketService: SocketService,
        private principal: Principal) {
    }

    ngOnInit() {
        //authenticate
        this.principal.identity().then((account) => {
            this.socketService.connect('message', {});

            //connect and subscribe to websocket
            this.messageSubscription = this.message$.subscribe((messages: any[]) => {
                this.messages = messages;
                this.createDataSource();
            });
        });

        // connect to redux store
        this.message$ = this.store.select('message');

        // initialize ag-grid
        this.gridOptions = <GridOptions>{};
        this.columnDefs = this.createColumnDefs();
        this.email = 'anonymous';
        this.message = '';
    }

    ngOnDestroy() {
        this.messageSubscription.unsubscribe();
        this.socketService.unsubscribe();
    }

    onGridReady() {
        this.gridOptions.api.sizeColumnsToFit();
        //   this.messageService.findMessages()
    }

    createColumnDefs() {
        return [
            {
                headerName: 'Email',
                field: 'email'
            },
            {
                headerName: 'Message',
                field: 'message'
            },
            {
                headerName: 'Created Time',
                field: 'createdAt'
            },
            {
                headerName: 'Updated Time',
                field: 'updatedAt'
            }
        ];
    }

    createDataSource() {
        if (!this.gridOptions) return;
        const dataSource = {
            rowCount: -1,
            getRows: (params) => {
                const rowsThisPage = this.messages.slice(params.startRow, params.endRow);
                let lastRow = -1;
                if (this.messages.length <= params.endRow) {
                    lastRow = this.messages.length;
                }
                params.successCallback(rowsThisPage, this.messages.length);
            }
        };

        this.gridOptions.api.setDatasource(dataSource);
    }

    createMessage() {
        this.store.dispatch(new EntityActions.Add('message', {
            email: this.email,
            message: this.message
        }));
    }
}
