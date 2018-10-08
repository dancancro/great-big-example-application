import { element, by, ElementFinder } from 'protractor';

export class TalkComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-talk div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class TalkUpdatePage {
    pageTitle = element(by.id('jhi-talk-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    titleInput = element(by.id('field_title'));
    speakerInput = element(by.id('field_speaker'));
    descriptionInput = element(by.id('field_description'));
    yourRatingInput = element(by.id('field_yourRating'));
    ratingInput = element(by.id('field_rating'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setTitleInput(title) {
        await this.titleInput.sendKeys(title);
    }

    async getTitleInput() {
        return this.titleInput.getAttribute('value');
    }

    async setSpeakerInput(speaker) {
        await this.speakerInput.sendKeys(speaker);
    }

    async getSpeakerInput() {
        return this.speakerInput.getAttribute('value');
    }

    async setDescriptionInput(description) {
        await this.descriptionInput.sendKeys(description);
    }

    async getDescriptionInput() {
        return this.descriptionInput.getAttribute('value');
    }

    async setYourRatingInput(yourRating) {
        await this.yourRatingInput.sendKeys(yourRating);
    }

    async getYourRatingInput() {
        return this.yourRatingInput.getAttribute('value');
    }

    async setRatingInput(rating) {
        await this.ratingInput.sendKeys(rating);
    }

    async getRatingInput() {
        return this.ratingInput.getAttribute('value');
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
