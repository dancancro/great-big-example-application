import { element, by, ElementFinder } from 'protractor';

export class ClaimRebuttalComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-claim-rebuttal div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ClaimRebuttalUpdatePage {
    pageTitle = element(by.id('jhi-claim-rebuttal-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    claimIdInput = element(by.id('field_claimId'));
    rebuttalIdInput = element(by.id('field_rebuttalId'));
    sortOrderInput = element(by.id('field_sortOrder'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setClaimIdInput(claimId) {
        await this.claimIdInput.sendKeys(claimId);
    }

    async getClaimIdInput() {
        return this.claimIdInput.getAttribute('value');
    }

    async setRebuttalIdInput(rebuttalId) {
        await this.rebuttalIdInput.sendKeys(rebuttalId);
    }

    async getRebuttalIdInput() {
        return this.rebuttalIdInput.getAttribute('value');
    }

    async setSortOrderInput(sortOrder) {
        await this.sortOrderInput.sendKeys(sortOrder);
    }

    async getSortOrderInput() {
        return this.sortOrderInput.getAttribute('value');
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
