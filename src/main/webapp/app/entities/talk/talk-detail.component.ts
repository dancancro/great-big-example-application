import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { ITalk } from 'app/shared/model/talk.model';

@Component({
    selector: 'jhi-talk-detail',
    templateUrl: './talk-detail.component.html'
})
export class TalkDetailComponent implements OnInit {
    talk: ITalk;

    constructor(private dataUtils: JhiDataUtils, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ talk }) => {
            this.talk = talk;
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }
}
