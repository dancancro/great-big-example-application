import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';

@Component({
    selector: 'jhi-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['feed.component.scss']
})
export class Feed implements OnInit {
    // true here is for using subdirectories, you can also specify regex as third param
    public pathToImages = require.context('../../../../', true, /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i);

    public feed: Array<Object>;

    constructor(private _feedService: FeedService) {
    }

    ngOnInit() {
        this._loadFeed();
    }

    expandMessage(message) {
        message.expanded = !message.expanded;
    }

    private _loadFeed() {
        this.feed = this._feedService.getData();
    }
}
