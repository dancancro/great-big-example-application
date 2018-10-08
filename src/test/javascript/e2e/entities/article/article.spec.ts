import { browser, ExpectedConditions as ec, protractor } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ArticleComponentsPage, ArticleUpdatePage } from './article.page-object';

describe('Article e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let articleUpdatePage: ArticleUpdatePage;
    let articleComponentsPage: ArticleComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Articles', async () => {
        await navBarPage.goToEntity('article');
        articleComponentsPage = new ArticleComponentsPage();
        expect(await articleComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.article.home.title/);
    });

    it('should load create Article page', async () => {
        await articleComponentsPage.clickOnCreateButton();
        articleUpdatePage = new ArticleUpdatePage();
        expect(await articleUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.article.home.createOrEditLabel/);
        await articleUpdatePage.cancel();
    });

    it('should create and save Articles', async () => {
        await articleComponentsPage.clickOnCreateButton();
        await articleUpdatePage.setSlugInput('slug');
        expect(await articleUpdatePage.getSlugInput()).toMatch('slug');
        await articleUpdatePage.setTitleInput('title');
        expect(await articleUpdatePage.getTitleInput()).toMatch('title');
        await articleUpdatePage.setDescriptionInput('description');
        expect(await articleUpdatePage.getDescriptionInput()).toMatch('description');
        await articleUpdatePage.setBodyInput('body');
        expect(await articleUpdatePage.getBodyInput()).toMatch('body');
        await articleUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await articleUpdatePage.getCreatedAtInput()).toContain('2001-01-01T02:30');
        await articleUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await articleUpdatePage.getUpdatedAtInput()).toContain('2001-01-01T02:30');
        // articleUpdatePage.tagSelectLastOption();
        await articleUpdatePage.authorSelectLastOption();
        await articleUpdatePage.save();
        expect(await articleUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
