import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TagComponentsPage, TagUpdatePage } from './tag.page-object';

describe('Tag e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let tagUpdatePage: TagUpdatePage;
    let tagComponentsPage: TagComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Tags', async () => {
        await navBarPage.goToEntity('tag');
        tagComponentsPage = new TagComponentsPage();
        expect(await tagComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.tag.home.title/);
    });

    it('should load create Tag page', async () => {
        await tagComponentsPage.clickOnCreateButton();
        tagUpdatePage = new TagUpdatePage();
        expect(await tagUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.tag.home.createOrEditLabel/);
        await tagUpdatePage.cancel();
    });

    it('should create and save Tags', async () => {
        await tagComponentsPage.clickOnCreateButton();
        await tagUpdatePage.setNameInput('name');
        expect(await tagUpdatePage.getNameInput()).toMatch('name');
        await tagUpdatePage.save();
        expect(await tagUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
