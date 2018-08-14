import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Claim e2e test', () => {

    let navBarPage: NavBarPage;
    let claimDialogPage: ClaimDialogPage;
    let claimComponentsPage: ClaimComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Claims', () => {
        navBarPage.goToEntity('claim');
        claimComponentsPage = new ClaimComponentsPage();
        expect(claimComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.claim.home.title/);

    });

    it('should load create Claim dialog', () => {
        claimComponentsPage.clickOnCreateButton();
        claimDialogPage = new ClaimDialogPage();
        expect(claimDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.claim.home.createOrEditLabel/);
        claimDialogPage.close();
    });

    it('should create and save Claims', () => {
        claimComponentsPage.clickOnCreateButton();
        claimDialogPage.setNameInput('name');
        expect(claimDialogPage.getNameInput()).toMatch('name');
        claimDialogPage.setSortOrderInput('5');
        expect(claimDialogPage.getSortOrderInput()).toMatch('5');
        claimDialogPage.setImageLabelInput('imageLabel');
        expect(claimDialogPage.getImageLabelInput()).toMatch('imageLabel');
        claimDialogPage.setImageLinkInput('imageLink');
        expect(claimDialogPage.getImageLinkInput()).toMatch('imageLink');
        claimDialogPage.save();
        expect(claimDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ClaimComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-claim div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ClaimDialogPage {
    modalTitle = element(by.css('h4#myClaimLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));
    sortOrderInput = element(by.css('input#field_sortOrder'));
    imageLabelInput = element(by.css('input#field_imageLabel'));
    imageLinkInput = element(by.css('input#field_imageLink'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    };

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
    };

    setSortOrderInput = function(sortOrder) {
        this.sortOrderInput.sendKeys(sortOrder);
    };

    getSortOrderInput = function() {
        return this.sortOrderInput.getAttribute('value');
    };

    setImageLabelInput = function(imageLabel) {
        this.imageLabelInput.sendKeys(imageLabel);
    };

    getImageLabelInput = function() {
        return this.imageLabelInput.getAttribute('value');
    };

    setImageLinkInput = function(imageLink) {
        this.imageLinkInput.sendKeys(imageLink);
    };

    getImageLinkInput = function() {
        return this.imageLinkInput.getAttribute('value');
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
