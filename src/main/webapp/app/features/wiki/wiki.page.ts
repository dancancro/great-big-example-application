import { Component } from '@angular/core';
@Component({
    selector: 'jhi-wiki-page',
    styleUrls: ['wiki.scss'],
    template: `
    <br><br>
    <div>
    <jhi-wiki></jhi-wiki><br>
    <jhi-wiki-smart></jhi-wiki-smart>
    </div>
  `
})
export class WikiPage { }
