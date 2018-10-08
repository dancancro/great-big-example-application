import { browser, ExpectedConditions as ec, protractor } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { MessageComponentsPage, MessageUpdatePage } from './message.page-object';

describe('Message e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let messageUpdatePage: MessageUpdatePage;
    let messageComponentsPage: MessageComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Messages', async () => {
        await navBarPage.goToEntity('message');
        messageComponentsPage = new MessageComponentsPage();
        expect(await messageComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.message.home.title/);
    });

    it('should load create Message page', async () => {
        await messageComponentsPage.clickOnCreateButton();
        messageUpdatePage = new MessageUpdatePage();
        expect(await messageUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.message.home.createOrEditLabel/);
        await messageUpdatePage.cancel();
    });

    it('should create and save Messages', async () => {
        await messageComponentsPage.clickOnCreateButton();
        await messageUpdatePage.setUserLoginInput('userLogin');
        expect(await messageUpdatePage.getUserLoginInput()).toMatch('userLogin');
        await messageUpdatePage.setMessageInput('message');
        expect(await messageUpdatePage.getMessageInput()).toMatch('message');
        await messageUpdatePage.setCreatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await messageUpdatePage.getCreatedAtInput()).toContain('2001-01-01T02:30');
        await messageUpdatePage.setUpdatedAtInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await messageUpdatePage.getUpdatedAtInput()).toContain('2001-01-01T02:30');
        await messageUpdatePage.save();
        expect(await messageUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
