import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { CrisisComponentsPage, CrisisUpdatePage } from './crisis.page-object';

describe('Crisis e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let crisisUpdatePage: CrisisUpdatePage;
    let crisisComponentsPage: CrisisComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Crises', async () => {
        await navBarPage.goToEntity('crisis');
        crisisComponentsPage = new CrisisComponentsPage();
        expect(await crisisComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.crisis.home.title/);
    });

    it('should load create Crisis page', async () => {
        await crisisComponentsPage.clickOnCreateButton();
        crisisUpdatePage = new CrisisUpdatePage();
        expect(await crisisUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.crisis.home.createOrEditLabel/);
        await crisisUpdatePage.cancel();
    });

    it('should create and save Crises', async () => {
        await crisisComponentsPage.clickOnCreateButton();
        await crisisUpdatePage.setNameInput('name');
        expect(await crisisUpdatePage.getNameInput()).toMatch('name');
        await crisisUpdatePage.save();
        expect(await crisisUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
