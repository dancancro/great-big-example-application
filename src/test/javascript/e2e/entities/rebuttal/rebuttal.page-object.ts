import { element, by, ElementFinder } from 'protractor';

export class RebuttalComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-rebuttal div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class RebuttalUpdatePage {
    pageTitle = element(by.id('jhi-rebuttal-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    longNameInput = element(by.id('field_longName'));
    shortNameInput = element(by.id('field_shortName'));
    dateInput = element(by.id('field_date'));
    expiresInput = element(by.id('field_expires'));
    linkInput = element(by.id('field_link'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setLongNameInput(longName) {
        await this.longNameInput.sendKeys(longName);
    }

    async getLongNameInput() {
        return this.longNameInput.getAttribute('value');
    }

    async setShortNameInput(shortName) {
        await this.shortNameInput.sendKeys(shortName);
    }

    async getShortNameInput() {
        return this.shortNameInput.getAttribute('value');
    }

    async setDateInput(date) {
        await this.dateInput.sendKeys(date);
    }

    async getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    async setExpiresInput(expires) {
        await this.expiresInput.sendKeys(expires);
    }

    async getExpiresInput() {
        return this.expiresInput.getAttribute('value');
    }

    async setLinkInput(link) {
        await this.linkInput.sendKeys(link);
    }

    async getLinkInput() {
        return this.linkInput.getAttribute('value');
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
