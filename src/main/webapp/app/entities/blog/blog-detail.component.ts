import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { EventManager  } from 'ng-jhipster';

import { Blog } from './blog.model';
import { BlogService } from './blog.service';

@Component({
    selector: 'jhi-blog-detail',
    templateUrl: './blog-detail.component.html'
})
export class BlogDetailComponent implements OnInit, OnDestroy {

    blog: Blog;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: EventManager,
        private blogService: BlogService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInBlogs();
    }

    load(id) {
        this.blogService.find(id).subscribe((blog) => {
            this.blog = blog;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInBlogs() {
        this.eventSubscriber = this.eventManager.subscribe(
            'blogListModification',
            (response) => this.load(this.blog.id)
        );
    }
}
