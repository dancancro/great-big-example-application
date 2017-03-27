import { Component } from '@angular/core';
@Component({
  selector: 'app-wiki-dashboard',
  styleUrls: ['wiki.css'],
  template: `
    <br><br>
    <div>
    <app-wiki></app-wiki><br>
    <app-wiki-smart></app-wiki-smart>
    </div>
  `
})
export class WikiPage { }
