import { element, by, ElementFinder } from 'protractor';

export class ClaimComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-claim div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ClaimUpdatePage {
    pageTitle = element(by.id('jhi-claim-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    nameInput = element(by.id('field_name'));
    sortOrderInput = element(by.id('field_sortOrder'));
    imageLabelInput = element(by.id('field_imageLabel'));
    imageLinkInput = element(by.id('field_imageLink'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setNameInput(name) {
        await this.nameInput.sendKeys(name);
    }

    async getNameInput() {
        return this.nameInput.getAttribute('value');
    }

    async setSortOrderInput(sortOrder) {
        await this.sortOrderInput.sendKeys(sortOrder);
    }

    async getSortOrderInput() {
        return this.sortOrderInput.getAttribute('value');
    }

    async setImageLabelInput(imageLabel) {
        await this.imageLabelInput.sendKeys(imageLabel);
    }

    async getImageLabelInput() {
        return this.imageLabelInput.getAttribute('value');
    }

    async setImageLinkInput(imageLink) {
        await this.imageLinkInput.sendKeys(imageLink);
    }

    async getImageLinkInput() {
        return this.imageLinkInput.getAttribute('value');
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
