import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { HeroComponentsPage, HeroUpdatePage } from './hero.page-object';

describe('Hero e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let heroUpdatePage: HeroUpdatePage;
    let heroComponentsPage: HeroComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Heroes', async () => {
        await navBarPage.goToEntity('hero');
        heroComponentsPage = new HeroComponentsPage();
        expect(await heroComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.hero.home.title/);
    });

    it('should load create Hero page', async () => {
        await heroComponentsPage.clickOnCreateButton();
        heroUpdatePage = new HeroUpdatePage();
        expect(await heroUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.hero.home.createOrEditLabel/);
        await heroUpdatePage.cancel();
    });

    it('should create and save Heroes', async () => {
        await heroComponentsPage.clickOnCreateButton();
        await heroUpdatePage.setNameInput('name');
        expect(await heroUpdatePage.getNameInput()).toMatch('name');
        await heroUpdatePage.save();
        expect(await heroUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
