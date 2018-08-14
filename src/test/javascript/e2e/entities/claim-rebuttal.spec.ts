import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('ClaimRebuttal e2e test', () => {

    let navBarPage: NavBarPage;
    let claimRebuttalDialogPage: ClaimRebuttalDialogPage;
    let claimRebuttalComponentsPage: ClaimRebuttalComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load ClaimRebuttals', () => {
        navBarPage.goToEntity('claim-rebuttal');
        claimRebuttalComponentsPage = new ClaimRebuttalComponentsPage();
        expect(claimRebuttalComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.claimRebuttal.home.title/);

    });

    it('should load create ClaimRebuttal dialog', () => {
        claimRebuttalComponentsPage.clickOnCreateButton();
        claimRebuttalDialogPage = new ClaimRebuttalDialogPage();
        expect(claimRebuttalDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.claimRebuttal.home.createOrEditLabel/);
        claimRebuttalDialogPage.close();
    });

    it('should create and save ClaimRebuttals', () => {
        claimRebuttalComponentsPage.clickOnCreateButton();
        claimRebuttalDialogPage.setClaimIdInput('5');
        expect(claimRebuttalDialogPage.getClaimIdInput()).toMatch('5');
        claimRebuttalDialogPage.setRebuttalIdInput('5');
        expect(claimRebuttalDialogPage.getRebuttalIdInput()).toMatch('5');
        claimRebuttalDialogPage.setSortOrderInput('5');
        expect(claimRebuttalDialogPage.getSortOrderInput()).toMatch('5');
        claimRebuttalDialogPage.save();
        expect(claimRebuttalDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ClaimRebuttalComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-claim-rebuttal div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ClaimRebuttalDialogPage {
    modalTitle = element(by.css('h4#myClaimRebuttalLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    claimIdInput = element(by.css('input#field_claimId'));
    rebuttalIdInput = element(by.css('input#field_rebuttalId'));
    sortOrderInput = element(by.css('input#field_sortOrder'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setClaimIdInput = function(claimId) {
        this.claimIdInput.sendKeys(claimId);
    };

    getClaimIdInput = function() {
        return this.claimIdInput.getAttribute('value');
    };

    setRebuttalIdInput = function(rebuttalId) {
        this.rebuttalIdInput.sendKeys(rebuttalId);
    };

    getRebuttalIdInput = function() {
        return this.rebuttalIdInput.getAttribute('value');
    };

    setSortOrderInput = function(sortOrder) {
        this.sortOrderInput.sendKeys(sortOrder);
    };

    getSortOrderInput = function() {
        return this.sortOrderInput.getAttribute('value');
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
