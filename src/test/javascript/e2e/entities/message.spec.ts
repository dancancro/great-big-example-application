import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Message e2e test', () => {

    let navBarPage: NavBarPage;
    let messageDialogPage: MessageDialogPage;
    let messageComponentsPage: MessageComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Messages', () => {
        navBarPage.goToEntity('message');
        messageComponentsPage = new MessageComponentsPage();
        expect(messageComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.message.home.title/);

    });

    it('should load create Message dialog', () => {
        messageComponentsPage.clickOnCreateButton();
        messageDialogPage = new MessageDialogPage();
        expect(messageDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.message.home.createOrEditLabel/);
        messageDialogPage.close();
    });

    it('should create and save Messages', () => {
        messageComponentsPage.clickOnCreateButton();
        messageDialogPage.setUserLoginInput('userLogin');
        expect(messageDialogPage.getUserLoginInput()).toMatch('userLogin');
        messageDialogPage.setMessageInput('message');
        expect(messageDialogPage.getMessageInput()).toMatch('message');
        messageDialogPage.setCreatedAtInput(12310020012301);
        expect(messageDialogPage.getCreatedAtInput()).toMatch('2001-12-31T02:30');
        messageDialogPage.setUpdatedAtInput(12310020012301);
        expect(messageDialogPage.getUpdatedAtInput()).toMatch('2001-12-31T02:30');
        messageDialogPage.save();
        expect(messageDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class MessageComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-message div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class MessageDialogPage {
    modalTitle = element(by.css('h4#myMessageLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    userLoginInput = element(by.css('input#field_userLogin'));
    messageInput = element(by.css('input#field_message'));
    createdAtInput = element(by.css('input#field_createdAt'));
    updatedAtInput = element(by.css('input#field_updatedAt'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setUserLoginInput = function(userLogin) {
        this.userLoginInput.sendKeys(userLogin);
    };

    getUserLoginInput = function() {
        return this.userLoginInput.getAttribute('value');
    };

    setMessageInput = function(message) {
        this.messageInput.sendKeys(message);
    };

    getMessageInput = function() {
        return this.messageInput.getAttribute('value');
    };

    setCreatedAtInput = function(createdAt) {
        this.createdAtInput.sendKeys(createdAt);
    };

    getCreatedAtInput = function() {
        return this.createdAtInput.getAttribute('value');
    };

    setUpdatedAtInput = function(updatedAt) {
        this.updatedAtInput.sendKeys(updatedAt);
    };

    getUpdatedAtInput = function() {
        return this.updatedAtInput.getAttribute('value');
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
