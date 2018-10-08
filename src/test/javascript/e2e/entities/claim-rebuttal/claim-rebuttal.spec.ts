import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ClaimRebuttalComponentsPage, ClaimRebuttalUpdatePage } from './claim-rebuttal.page-object';

describe('ClaimRebuttal e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let claimRebuttalUpdatePage: ClaimRebuttalUpdatePage;
    let claimRebuttalComponentsPage: ClaimRebuttalComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load ClaimRebuttals', async () => {
        await navBarPage.goToEntity('claim-rebuttal');
        claimRebuttalComponentsPage = new ClaimRebuttalComponentsPage();
        expect(await claimRebuttalComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.claimRebuttal.home.title/);
    });

    it('should load create ClaimRebuttal page', async () => {
        await claimRebuttalComponentsPage.clickOnCreateButton();
        claimRebuttalUpdatePage = new ClaimRebuttalUpdatePage();
        expect(await claimRebuttalUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.claimRebuttal.home.createOrEditLabel/);
        await claimRebuttalUpdatePage.cancel();
    });

    it('should create and save ClaimRebuttals', async () => {
        await claimRebuttalComponentsPage.clickOnCreateButton();
        await claimRebuttalUpdatePage.setClaimIdInput('5');
        expect(await claimRebuttalUpdatePage.getClaimIdInput()).toMatch('5');
        await claimRebuttalUpdatePage.setRebuttalIdInput('5');
        expect(await claimRebuttalUpdatePage.getRebuttalIdInput()).toMatch('5');
        await claimRebuttalUpdatePage.setSortOrderInput('5');
        expect(await claimRebuttalUpdatePage.getSortOrderInput()).toMatch('5');
        await claimRebuttalUpdatePage.save();
        expect(await claimRebuttalUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
