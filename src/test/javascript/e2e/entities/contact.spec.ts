import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Contact e2e test', () => {

    let navBarPage: NavBarPage;
    let contactDialogPage: ContactDialogPage;
    let contactComponentsPage: ContactComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Contacts', () => {
        navBarPage.goToEntity('contact');
        contactComponentsPage = new ContactComponentsPage();
        expect(contactComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.contact.home.title/);

    });

    it('should load create Contact dialog', () => {
        contactComponentsPage.clickOnCreateButton();
        contactDialogPage = new ContactDialogPage();
        expect(contactDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.contact.home.createOrEditLabel/);
        contactDialogPage.close();
    });

    it('should create and save Contacts', () => {
        contactComponentsPage.clickOnCreateButton();
        contactDialogPage.setNameInput('name');
        expect(contactDialogPage.getNameInput()).toMatch('name');
        contactDialogPage.save();
        expect(contactDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ContactComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-contact div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ContactDialogPage {
    modalTitle = element(by.css('h4#myContactLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    };

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
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
