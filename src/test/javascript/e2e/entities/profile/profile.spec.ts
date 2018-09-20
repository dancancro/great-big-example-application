import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { ProfileComponentsPage, ProfileUpdatePage } from './profile.page-object';

describe('Profile e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let profileUpdatePage: ProfileUpdatePage;
    let profileComponentsPage: ProfileComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Profiles', async () => {
        await navBarPage.goToEntity('profile');
        profileComponentsPage = new ProfileComponentsPage();
        expect(await profileComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.profile.home.title/);
    });

    it('should load create Profile page', async () => {
        await profileComponentsPage.clickOnCreateButton();
        profileUpdatePage = new ProfileUpdatePage();
        expect(await profileUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.profile.home.createOrEditLabel/);
        await profileUpdatePage.cancel();
    });

    it('should create and save Profiles', async () => {
        await profileComponentsPage.clickOnCreateButton();
        await profileUpdatePage.setUsernameInput('username');
        expect(await profileUpdatePage.getUsernameInput()).toMatch('username');
        await profileUpdatePage.setBioInput('bio');
        expect(await profileUpdatePage.getBioInput()).toMatch('bio');
        await profileUpdatePage.setImageInput('image');
        expect(await profileUpdatePage.getImageInput()).toMatch('image');
        const selectedFollowing = profileUpdatePage.getFollowingInput();
        if (await selectedFollowing.isSelected()) {
            await profileUpdatePage.getFollowingInput().click();
            expect(await profileUpdatePage.getFollowingInput().isSelected()).toBeFalsy();
        } else {
            await profileUpdatePage.getFollowingInput().click();
            expect(await profileUpdatePage.getFollowingInput().isSelected()).toBeTruthy();
        }
        await profileUpdatePage.save();
        expect(await profileUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
