import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { AuthorComponentsPage, AuthorUpdatePage } from './author.page-object';

describe('Author e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let authorUpdatePage: AuthorUpdatePage;
    let authorComponentsPage: AuthorComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Authors', async () => {
        await navBarPage.goToEntity('author');
        authorComponentsPage = new AuthorComponentsPage();
        expect(await authorComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.author.home.title/);
    });

    it('should load create Author page', async () => {
        await authorComponentsPage.clickOnCreateButton();
        authorUpdatePage = new AuthorUpdatePage();
        expect(await authorUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.author.home.createOrEditLabel/);
        await authorUpdatePage.cancel();
    });

    it('should create and save Authors', async () => {
        await authorComponentsPage.clickOnCreateButton();
        await authorUpdatePage.setBioInput('bio');
        expect(await authorUpdatePage.getBioInput()).toMatch('bio');
        await authorUpdatePage.userSelectLastOption();
        // authorUpdatePage.followerSelectLastOption();
        // authorUpdatePage.favoriteSelectLastOption();
        await authorUpdatePage.save();
        expect(await authorUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
