import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Talk e2e test', () => {

    let navBarPage: NavBarPage;
    let talkDialogPage: TalkDialogPage;
    let talkComponentsPage: TalkComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Talks', () => {
        navBarPage.goToEntity('talk');
        talkComponentsPage = new TalkComponentsPage();
        expect(talkComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.talk.home.title/);

    });

    it('should load create Talk dialog', () => {
        talkComponentsPage.clickOnCreateButton();
        talkDialogPage = new TalkDialogPage();
        expect(talkDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.talk.home.createOrEditLabel/);
        talkDialogPage.close();
    });

    it('should create and save Talks', () => {
        talkComponentsPage.clickOnCreateButton();
        talkDialogPage.setTitleInput('title');
        expect(talkDialogPage.getTitleInput()).toMatch('title');
        talkDialogPage.setSpeakerInput('speaker');
        expect(talkDialogPage.getSpeakerInput()).toMatch('speaker');
        talkDialogPage.setDescriptionInput('description');
        expect(talkDialogPage.getDescriptionInput()).toMatch('description');
        talkDialogPage.setYourRatingInput('5');
        expect(talkDialogPage.getYourRatingInput()).toMatch('5');
        talkDialogPage.setRatingInput('5');
        expect(talkDialogPage.getRatingInput()).toMatch('5');
        talkDialogPage.save();
        expect(talkDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class TalkComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-talk div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TalkDialogPage {
    modalTitle = element(by.css('h4#myTalkLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    titleInput = element(by.css('input#field_title'));
    speakerInput = element(by.css('input#field_speaker'));
    descriptionInput = element(by.css('textarea#field_description'));
    yourRatingInput = element(by.css('input#field_yourRating'));
    ratingInput = element(by.css('input#field_rating'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTitleInput = function(title) {
        this.titleInput.sendKeys(title);
    };

    getTitleInput = function() {
        return this.titleInput.getAttribute('value');
    };

    setSpeakerInput = function(speaker) {
        this.speakerInput.sendKeys(speaker);
    };

    getSpeakerInput = function() {
        return this.speakerInput.getAttribute('value');
    };

    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
    };

    setYourRatingInput = function(yourRating) {
        this.yourRatingInput.sendKeys(yourRating);
    };

    getYourRatingInput = function() {
        return this.yourRatingInput.getAttribute('value');
    };

    setRatingInput = function(rating) {
        this.ratingInput.sendKeys(rating);
    };

    getRatingInput = function() {
        return this.ratingInput.getAttribute('value');
    };

    save() {
        this.saveButton.click();
    }

    close() {
        this.closeButton.click();
    }

    getSaveButton() {
        return this.saveButton;
    }
}
