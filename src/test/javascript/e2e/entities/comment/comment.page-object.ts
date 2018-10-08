import { element, by, ElementFinder } from 'protractor';

export class CommentComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-comment div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CommentUpdatePage {
    pageTitle = element(by.id('jhi-comment-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    bodyInput = element(by.id('field_body'));
    createdAtInput = element(by.id('field_createdAt'));
    updatedAtInput = element(by.id('field_updatedAt'));
    articleSelect = element(by.id('field_article'));
    authorSelect = element(by.id('field_author'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setBodyInput(body) {
        await this.bodyInput.sendKeys(body);
    }

    async getBodyInput() {
        return this.bodyInput.getAttribute('value');
    }

    async setCreatedAtInput(createdAt) {
        await this.createdAtInput.sendKeys(createdAt);
    }

    async getCreatedAtInput() {
        return this.createdAtInput.getAttribute('value');
    }

    async setUpdatedAtInput(updatedAt) {
        await this.updatedAtInput.sendKeys(updatedAt);
    }

    async getUpdatedAtInput() {
        return this.updatedAtInput.getAttribute('value');
    }

    async articleSelectLastOption() {
        await this.articleSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async articleSelectOption(option) {
        await this.articleSelect.sendKeys(option);
    }

    getArticleSelect(): ElementFinder {
        return this.articleSelect;
    }

    async getArticleSelectedOption() {
        return this.articleSelect.element(by.css('option:checked')).getText();
    }

    async authorSelectLastOption() {
        await this.authorSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async authorSelectOption(option) {
        await this.authorSelect.sendKeys(option);
    }

    getAuthorSelect(): ElementFinder {
        return this.authorSelect;
    }

    async getAuthorSelectedOption() {
        return this.authorSelect.element(by.css('option:checked')).getText();
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
