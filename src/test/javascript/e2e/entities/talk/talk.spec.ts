import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { TalkComponentsPage, TalkUpdatePage } from './talk.page-object';

describe('Talk e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let talkUpdatePage: TalkUpdatePage;
    let talkComponentsPage: TalkComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Talks', async () => {
        await navBarPage.goToEntity('talk');
        talkComponentsPage = new TalkComponentsPage();
        expect(await talkComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.talk.home.title/);
    });

    it('should load create Talk page', async () => {
        await talkComponentsPage.clickOnCreateButton();
        talkUpdatePage = new TalkUpdatePage();
        expect(await talkUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.talk.home.createOrEditLabel/);
        await talkUpdatePage.cancel();
    });

    it('should create and save Talks', async () => {
        await talkComponentsPage.clickOnCreateButton();
        await talkUpdatePage.setTitleInput('title');
        expect(await talkUpdatePage.getTitleInput()).toMatch('title');
        await talkUpdatePage.setSpeakerInput('speaker');
        expect(await talkUpdatePage.getSpeakerInput()).toMatch('speaker');
        await talkUpdatePage.setDescriptionInput('description');
        expect(await talkUpdatePage.getDescriptionInput()).toMatch('description');
        await talkUpdatePage.setYourRatingInput('5');
        expect(await talkUpdatePage.getYourRatingInput()).toMatch('5');
        await talkUpdatePage.setRatingInput('5');
        expect(await talkUpdatePage.getRatingInput()).toMatch('5');
        await talkUpdatePage.save();
        expect(await talkUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
