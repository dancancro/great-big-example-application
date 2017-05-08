import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService, JhiLanguageService, DataUtils } from 'ng-jhipster';

import { Entry } from './entry.model';
import { EntryPopupService } from './entry-popup.service';
import { EntryService } from './entry.service';
import { Blog, BlogService } from '../blog';
import { Tag, TagService } from '../tag';

@Component({
    selector: 'jhi-entry-dialog',
    templateUrl: './entry-dialog.component.html'
})
export class EntryDialogComponent implements OnInit {

    entry: Entry;
    authorities: any[];
    isSaving: boolean;

    blogs: Blog[];

    tags: Tag[];
    constructor(
        public activeModal: NgbActiveModal,
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private alertService: AlertService,
        private entryService: EntryService,
        private blogService: BlogService,
        private tagService: TagService,
        private eventManager: EventManager
    ) {
        this.jhiLanguageService.setLocations(['entry']);
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.blogService.query().subscribe(
            (res: Response) => { this.blogs = res.json(); }, (res: Response) => this.onError(res.json()));
        this.tagService.query().subscribe(
            (res: Response) => { this.tags = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }

    setFileData(event, entry, field, isImage) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (isImage && !/^image\//.test(file.type)) {
                return;
            }
            this.dataUtils.toBase64(file, (base64Data) => {
                entry[field] = base64Data;
                entry[`${field}ContentType`] = file.type;
            });
        }
    }
    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.entry.id !== undefined) {
            this.entryService.update(this.entry)
                .subscribe((res: Entry) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        } else {
            this.entryService.create(this.entry)
                .subscribe((res: Entry) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
        }
    }

    private onSaveSuccess(result: Entry) {
        this.eventManager.broadcast({ name: 'entryListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackBlogById(index: number, item: Blog) {
        return item.id;
    }

    trackTagById(index: number, item: Tag) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-entry-popup',
    template: ''
})
export class EntryPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private entryPopupService: EntryPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.entryPopupService
                    .open(EntryDialogComponent, params['id']);
            } else {
                this.modalRef = this.entryPopupService
                    .open(EntryDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
