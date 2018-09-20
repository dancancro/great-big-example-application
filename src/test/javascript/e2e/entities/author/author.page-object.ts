import { element, by, ElementFinder } from 'protractor';

export class AuthorComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-author div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class AuthorUpdatePage {
    pageTitle = element(by.id('jhi-author-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    bioInput = element(by.id('field_bio'));
    userSelect = element(by.id('field_user'));
    followerSelect = element(by.id('field_follower'));
    favoriteSelect = element(by.id('field_favorite'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setBioInput(bio) {
        await this.bioInput.sendKeys(bio);
    }

    async getBioInput() {
        return this.bioInput.getAttribute('value');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    async followerSelectLastOption() {
        await this.followerSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async followerSelectOption(option) {
        await this.followerSelect.sendKeys(option);
    }

    getFollowerSelect(): ElementFinder {
        return this.followerSelect;
    }

    async getFollowerSelectedOption() {
        return this.followerSelect.element(by.css('option:checked')).getText();
    }

    async favoriteSelectLastOption() {
        await this.favoriteSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async favoriteSelectOption(option) {
        await this.favoriteSelect.sendKeys(option);
    }

    getFavoriteSelect(): ElementFinder {
        return this.favoriteSelect;
    }

    async getFavoriteSelectedOption() {
        return this.favoriteSelect.element(by.css('option:checked')).getText();
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
