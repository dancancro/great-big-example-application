import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GreatBigExampleApplicationHeroModule } from './hero/hero.module';
import { GreatBigExampleApplicationCrisisModule } from './crisis/crisis.module';
import { GreatBigExampleApplicationClaimModule } from './claim/claim.module';
import { GreatBigExampleApplicationContactModule } from './contact/contact.module';
import { GreatBigExampleApplicationNoteModule } from './note/note.module';
import { GreatBigExampleApplicationRebuttalModule } from './rebuttal/rebuttal.module';
import { GreatBigExampleApplicationClaimRebuttalModule } from './claim-rebuttal/claim-rebuttal.module';
import { GreatBigExampleApplicationBlogModule } from './blog/blog.module';
import { GreatBigExampleApplicationTagModule } from './tag/tag.module';
import { GreatBigExampleApplicationEntryModule } from './entry/entry.module';
import { GreatBigExampleApplicationMessageModule } from './message/message.module';
import { GreatBigExampleApplicationTalkModule } from './talk/talk.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GreatBigExampleApplicationHeroModule,
        GreatBigExampleApplicationCrisisModule,
        GreatBigExampleApplicationClaimModule,
        GreatBigExampleApplicationContactModule,
        GreatBigExampleApplicationNoteModule,
        GreatBigExampleApplicationRebuttalModule,
        GreatBigExampleApplicationClaimRebuttalModule,
        GreatBigExampleApplicationBlogModule,
        GreatBigExampleApplicationTagModule,
        GreatBigExampleApplicationEntryModule,
        GreatBigExampleApplicationMessageModule,
        GreatBigExampleApplicationTalkModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GreatBigExampleApplicationEntityModule {}
