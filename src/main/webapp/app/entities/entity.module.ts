import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GreatBigExampleApplicationArticleModule } from './article/article.module';
import { GreatBigExampleApplicationCommentModule } from './comment/comment.module';
import { GreatBigExampleApplicationAuthorModule } from './author/author.module';
import { GreatBigExampleApplicationProfileModule } from './profile/profile.module';
import { GreatBigExampleApplicationHeroModule } from './hero/hero.module';
import { GreatBigExampleApplicationCrisisModule } from './crisis/crisis.module';
import { GreatBigExampleApplicationClaimModule } from './claim/claim.module';
import { GreatBigExampleApplicationContactModule } from './contact/contact.module';
import { GreatBigExampleApplicationNoteModule } from './note/note.module';
import { GreatBigExampleApplicationRebuttalModule } from './rebuttal/rebuttal.module';
import { GreatBigExampleApplicationClaimRebuttalModule } from './claim-rebuttal/claim-rebuttal.module';
import { GreatBigExampleApplicationTagModule } from './tag/tag.module';
import { GreatBigExampleApplicationMessageModule } from './message/message.module';
import { GreatBigExampleApplicationTalkModule } from './talk/talk.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        GreatBigExampleApplicationArticleModule,
        GreatBigExampleApplicationCommentModule,
        GreatBigExampleApplicationAuthorModule,
        GreatBigExampleApplicationProfileModule,
        GreatBigExampleApplicationHeroModule,
        GreatBigExampleApplicationCrisisModule,
        GreatBigExampleApplicationClaimModule,
        GreatBigExampleApplicationContactModule,
        GreatBigExampleApplicationNoteModule,
        GreatBigExampleApplicationRebuttalModule,
        GreatBigExampleApplicationClaimRebuttalModule,
        GreatBigExampleApplicationTagModule,
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
