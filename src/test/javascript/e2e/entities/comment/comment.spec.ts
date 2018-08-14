import { browser, ExpectedConditions as ec, protractor } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CommentComponentsPage, CommentUpdatePage } from './comment.page-object';

describe('Comment e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let commentUpdatePage: CommentUpdatePage;
    let commentComponentsPage: CommentComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Comments', async () => {
        await navBarPage.goToEntity('comment');
        commentComponentsPage = new CommentComponentsPage();
        expect(await commentComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.comment.home.title/);
    });

    it('should load create Comment page', async () => {
        await commentComponentsPage.clickOnCreateButton();
        commentUpdatePage = new CommentUpdatePage();
        expect(await commentUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.comment.home.createOrEditLabel/);
        await commentUpdatePage.cancel();
    });

    it('should create and save Comments', async () => {
        await commentComponentsPage.clickOnCreateButton();
        await commentUpdatePage.setBodyInput('body');
        expect(await commentUpdatePage.getBodyInput()).toMatch('body');
        await commentUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await commentUpdatePage.getCreatedAtInput()).toContain('2001-01-01T02:30');
        await commentUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await commentUpdatePage.getUpdatedAtInput()).toContain('2001-01-01T02:30');
        await commentUpdatePage.articleSelectLastOption();
        await commentUpdatePage.authorSelectLastOption();
        await commentUpdatePage.save();
        expect(await commentUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
