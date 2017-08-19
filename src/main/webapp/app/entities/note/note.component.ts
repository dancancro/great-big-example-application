import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiAlertService, JhiEventManager } from 'ng-jhipster';

import { Note } from './note.model';
import { NoteService } from './note.service';
import { Principal, ResponseWrapper } from '../../shared';

@Component({
  selector: 'jhi-note',
  templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit, OnDestroy {
  notes: Note[];
  currentAccount: any;
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    private noteService: NoteService,
    private alertService: JhiAlertService,
    private eventManager: JhiEventManager,
    private activatedRoute: ActivatedRoute,
    private principal: Principal
  ) {
    this.currentSearch = activatedRoute.snapshot.params['search'] ? activatedRoute.snapshot.params['search'] : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.noteService.search({
        query: this.currentSearch,
      }).subscribe(
        (res: ResponseWrapper) => this.notes = res.json,
        (res: ResponseWrapper) => this.onError(res.json)
        );
      return;
    }
    this.noteService.query().subscribe(
      (res: ResponseWrapper) => {
        this.notes = res.json;
        this.currentSearch = '';
      },
      (res: ResponseWrapper) => this.onError(res.json)
    );
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }
  ngOnInit() {
    this.loadAll();
    this.principal.identity().then((account) => {
      this.currentAccount = account;
    });
    this.registerChangeInNotes();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: Note) {
    return item.id;
  }
  registerChangeInNotes() {
    this.eventSubscriber = this.eventManager.subscribe('noteListModification', (response) => this.loadAll());
  }

  private onError(error) {
    this.alertService.error(error.message, null, null);
  }
}
