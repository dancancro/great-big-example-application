import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ContactComponentsPage, ContactUpdatePage } from './contact.page-object';

describe('Contact e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let contactUpdatePage: ContactUpdatePage;
    let contactComponentsPage: ContactComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Contacts', async () => {
        await navBarPage.goToEntity('contact');
        contactComponentsPage = new ContactComponentsPage();
        expect(await contactComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.contact.home.title/);
    });

    it('should load create Contact page', async () => {
        await contactComponentsPage.clickOnCreateButton();
        contactUpdatePage = new ContactUpdatePage();
        expect(await contactUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.contact.home.createOrEditLabel/);
        await contactUpdatePage.cancel();
    });

    it('should create and save Contacts', async () => {
        await contactComponentsPage.clickOnCreateButton();
        await contactUpdatePage.setNameInput('name');
        expect(await contactUpdatePage.getNameInput()).toMatch('name');
        await contactUpdatePage.save();
        expect(await contactUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
