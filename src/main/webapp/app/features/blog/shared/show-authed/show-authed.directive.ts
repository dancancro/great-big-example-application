import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

import { Principal } from '../../../../shared/auth/principal.service';

@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
    constructor(
        private templateRef: TemplateRef<any>,
        private principal: Principal,
        private viewContainer: ViewContainerRef
    ) { }

    condition: boolean;

    ngOnInit() {
        if (this.principal.isAuthenticated && this.condition || !this.principal.isAuthenticated && !this.condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    @Input() set showAuthed(condition: boolean) {
        this.condition = condition;
    }

}
