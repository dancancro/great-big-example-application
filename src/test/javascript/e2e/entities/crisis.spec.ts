import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Crisis e2e test', () => {

    let navBarPage: NavBarPage;
    let crisisDialogPage: CrisisDialogPage;
    let crisisComponentsPage: CrisisComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Crises', () => {
        navBarPage.goToEntity('crisis');
        crisisComponentsPage = new CrisisComponentsPage();
        expect(crisisComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.crisis.home.title/);

    });

    it('should load create Crisis dialog', () => {
        crisisComponentsPage.clickOnCreateButton();
        crisisDialogPage = new CrisisDialogPage();
        expect(crisisDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.crisis.home.createOrEditLabel/);
        crisisDialogPage.close();
    });

    it('should create and save Crises', () => {
        crisisComponentsPage.clickOnCreateButton();
        crisisDialogPage.setNameInput('name');
        expect(crisisDialogPage.getNameInput()).toMatch('name');
        crisisDialogPage.save();
        expect(crisisDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class CrisisComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-crisis div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CrisisDialogPage {
    modalTitle = element(by.css('h4#myCrisisLabel'));
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
