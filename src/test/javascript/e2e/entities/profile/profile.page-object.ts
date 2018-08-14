import { element, by, ElementFinder } from 'protractor';

export class ProfileComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-profile div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProfileUpdatePage {
    pageTitle = element(by.id('jhi-profile-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    usernameInput = element(by.id('field_username'));
    bioInput = element(by.id('field_bio'));
    imageInput = element(by.id('field_image'));
    followingInput = element(by.id('field_following'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setUsernameInput(username) {
        await this.usernameInput.sendKeys(username);
    }

    async getUsernameInput() {
        return this.usernameInput.getAttribute('value');
    }

    async setBioInput(bio) {
        await this.bioInput.sendKeys(bio);
    }

    async getBioInput() {
        return this.bioInput.getAttribute('value');
    }

    async setImageInput(image) {
        await this.imageInput.sendKeys(image);
    }

    async getImageInput() {
        return this.imageInput.getAttribute('value');
    }

    getFollowingInput() {
        return this.followingInput;
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
