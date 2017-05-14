import { Component } from '@angular/core';
@Component({
  selector: 'gba-wiki-dashboard',
  styleUrls: ['wiki.scss'],
  template: `
    <br><br>
    <div>
    <gba-wiki></gba-wiki><br>
    <gba-wiki-smart></gba-wiki-smart>
    </div>
  `
})
export class WikiPage { }
