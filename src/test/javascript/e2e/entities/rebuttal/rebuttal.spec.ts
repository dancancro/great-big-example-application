import { browser, ExpectedConditions as ec, protractor } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { RebuttalComponentsPage, RebuttalUpdatePage } from './rebuttal.page-object';

describe('Rebuttal e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let rebuttalUpdatePage: RebuttalUpdatePage;
    let rebuttalComponentsPage: RebuttalComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Rebuttals', async () => {
        await navBarPage.goToEntity('rebuttal');
        rebuttalComponentsPage = new RebuttalComponentsPage();
        expect(await rebuttalComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.rebuttal.home.title/);
    });

    it('should load create Rebuttal page', async () => {
        await rebuttalComponentsPage.clickOnCreateButton();
        rebuttalUpdatePage = new RebuttalUpdatePage();
        expect(await rebuttalUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.rebuttal.home.createOrEditLabel/);
        await rebuttalUpdatePage.cancel();
    });

    it('should create and save Rebuttals', async () => {
        await rebuttalComponentsPage.clickOnCreateButton();
        await rebuttalUpdatePage.setLongNameInput('longName');
        expect(await rebuttalUpdatePage.getLongNameInput()).toMatch('longName');
        await rebuttalUpdatePage.setShortNameInput('shortName');
        expect(await rebuttalUpdatePage.getShortNameInput()).toMatch('shortName');
        await rebuttalUpdatePage.setDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await rebuttalUpdatePage.getDateInput()).toContain('2001-01-01T02:30');
        await rebuttalUpdatePage.setExpiresInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(await rebuttalUpdatePage.getExpiresInput()).toContain('2001-01-01T02:30');
        await rebuttalUpdatePage.setLinkInput('link');
        expect(await rebuttalUpdatePage.getLinkInput()).toMatch('link');
        await rebuttalUpdatePage.save();
        expect(await rebuttalUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
