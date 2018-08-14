import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ClaimComponentsPage, ClaimUpdatePage } from './claim.page-object';

describe('Claim e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let claimUpdatePage: ClaimUpdatePage;
    let claimComponentsPage: ClaimComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Claims', async () => {
        await navBarPage.goToEntity('claim');
        claimComponentsPage = new ClaimComponentsPage();
        expect(await claimComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.claim.home.title/);
    });

    it('should load create Claim page', async () => {
        await claimComponentsPage.clickOnCreateButton();
        claimUpdatePage = new ClaimUpdatePage();
        expect(await claimUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.claim.home.createOrEditLabel/);
        await claimUpdatePage.cancel();
    });

    it('should create and save Claims', async () => {
        await claimComponentsPage.clickOnCreateButton();
        await claimUpdatePage.setNameInput('name');
        expect(await claimUpdatePage.getNameInput()).toMatch('name');
        await claimUpdatePage.setSortOrderInput('5');
        expect(await claimUpdatePage.getSortOrderInput()).toMatch('5');
        await claimUpdatePage.setImageLabelInput('imageLabel');
        expect(await claimUpdatePage.getImageLabelInput()).toMatch('imageLabel');
        await claimUpdatePage.setImageLinkInput('imageLink');
        expect(await claimUpdatePage.getImageLinkInput()).toMatch('imageLink');
        await claimUpdatePage.save();
        expect(await claimUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
