import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager , JhiDataUtils } from 'ng-jhipster';

import { Author } from './author.model';
import { AuthorService } from './author.service';

@Component({
    selector: 'jhi-author-detail',
    templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent implements OnInit, OnDestroy {

    author: Author;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private dataUtils: JhiDataUtils,
        private authorService: AuthorService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInAuthors();
    }

    load(id) {
        this.authorService.find(id).subscribe((author) => {
            this.author = author;
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInAuthors() {
        this.eventSubscriber = this.eventManager.subscribe(
            'authorListModification',
            (response) => this.load(this.author.id)
        );
    }
}
