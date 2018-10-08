import { element, by, ElementFinder } from 'protractor';

export class ArticleComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-article div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ArticleUpdatePage {
    pageTitle = element(by.id('jhi-article-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    slugInput = element(by.id('field_slug'));
    titleInput = element(by.id('field_title'));
    descriptionInput = element(by.id('field_description'));
    bodyInput = element(by.id('field_body'));
    createdAtInput = element(by.id('field_createdAt'));
    updatedAtInput = element(by.id('field_updatedAt'));
    tagSelect = element(by.id('field_tag'));
    authorSelect = element(by.id('field_author'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setSlugInput(slug) {
        await this.slugInput.sendKeys(slug);
    }

    async getSlugInput() {
        return this.slugInput.getAttribute('value');
    }

    async setTitleInput(title) {
        await this.titleInput.sendKeys(title);
    }

    async getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
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

    async tagSelectLastOption() {
        await this.tagSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async tagSelectOption(option) {
        await this.tagSelect.sendKeys(option);
    }

    getTagSelect(): ElementFinder {
        return this.tagSelect;
    }

    async getTagSelectedOption() {
        return this.tagSelect.element(by.css('option:checked')).getText();
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
