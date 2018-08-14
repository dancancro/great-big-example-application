import { element, by, ElementFinder } from 'protractor';

export class NoteComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-note div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class NoteUpdatePage {
    pageTitle = element(by.id('jhi-note-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    textInput = element(by.id('field_text'));
    colourInput = element(by.id('field_colour'));
    leftInput = element(by.id('field_left'));
    topInput = element(by.id('field_top'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTextInput(text) {
        await this.textInput.sendKeys(text);
    }

    async getTextInput() {
        return this.textInput.getAttribute('value');
    }

    async setColourInput(colour) {
        await this.colourInput.sendKeys(colour);
    }

    async getColourInput() {
        return this.colourInput.getAttribute('value');
    }

    async setLeftInput(left) {
        await this.leftInput.sendKeys(left);
    }

    async getLeftInput() {
        return this.leftInput.getAttribute('value');
    }

    async setTopInput(top) {
        await this.topInput.sendKeys(top);
    }

    async getTopInput() {
        return this.topInput.getAttribute('value');
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
