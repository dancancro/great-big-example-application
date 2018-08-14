import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Rebuttal e2e test', () => {

    let navBarPage: NavBarPage;
    let rebuttalDialogPage: RebuttalDialogPage;
    let rebuttalComponentsPage: RebuttalComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Rebuttals', () => {
        navBarPage.goToEntity('rebuttal');
        rebuttalComponentsPage = new RebuttalComponentsPage();
        expect(rebuttalComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.rebuttal.home.title/);

    });

    it('should load create Rebuttal dialog', () => {
        rebuttalComponentsPage.clickOnCreateButton();
        rebuttalDialogPage = new RebuttalDialogPage();
        expect(rebuttalDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.rebuttal.home.createOrEditLabel/);
        rebuttalDialogPage.close();
    });

    it('should create and save Rebuttals', () => {
        rebuttalComponentsPage.clickOnCreateButton();
        rebuttalDialogPage.setLongNameInput('longName');
        expect(rebuttalDialogPage.getLongNameInput()).toMatch('longName');
        rebuttalDialogPage.setShortNameInput('shortName');
        expect(rebuttalDialogPage.getShortNameInput()).toMatch('shortName');
        rebuttalDialogPage.setDateInput(12310020012301);
        expect(rebuttalDialogPage.getDateInput()).toMatch('2001-12-31T02:30');
        rebuttalDialogPage.setExpiresInput(12310020012301);
        expect(rebuttalDialogPage.getExpiresInput()).toMatch('2001-12-31T02:30');
        rebuttalDialogPage.setLinkInput('link');
        expect(rebuttalDialogPage.getLinkInput()).toMatch('link');
        rebuttalDialogPage.save();
        expect(rebuttalDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class RebuttalComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-rebuttal div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class RebuttalDialogPage {
    modalTitle = element(by.css('h4#myRebuttalLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    longNameInput = element(by.css('input#field_longName'));
    shortNameInput = element(by.css('input#field_shortName'));
    dateInput = element(by.css('input#field_date'));
    expiresInput = element(by.css('input#field_expires'));
    linkInput = element(by.css('input#field_link'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setLongNameInput = function(longName) {
        this.longNameInput.sendKeys(longName);
    };

    getLongNameInput = function() {
        return this.longNameInput.getAttribute('value');
    };

    setShortNameInput = function(shortName) {
        this.shortNameInput.sendKeys(shortName);
    };

    getShortNameInput = function() {
        return this.shortNameInput.getAttribute('value');
    };

    setDateInput = function(date) {
        this.dateInput.sendKeys(date);
    };

    getDateInput = function() {
        return this.dateInput.getAttribute('value');
    };

    setExpiresInput = function(expires) {
        this.expiresInput.sendKeys(expires);
    };

    getExpiresInput = function() {
        return this.expiresInput.getAttribute('value');
    };

    setLinkInput = function(link) {
        this.linkInput.sendKeys(link);
    };

    getLinkInput = function() {
        return this.linkInput.getAttribute('value');
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
