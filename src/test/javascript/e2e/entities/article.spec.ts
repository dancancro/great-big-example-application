import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Article e2e test', () => {

    let navBarPage: NavBarPage;
    let articleDialogPage: ArticleDialogPage;
    let articleComponentsPage: ArticleComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Articles', () => {
        navBarPage.goToEntity('article');
        articleComponentsPage = new ArticleComponentsPage();
        expect(articleComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.article.home.title/);

    });

    it('should load create Article dialog', () => {
        articleComponentsPage.clickOnCreateButton();
        articleDialogPage = new ArticleDialogPage();
        expect(articleDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.article.home.createOrEditLabel/);
        articleDialogPage.close();
    });

    it('should create and save Articles', () => {
        articleComponentsPage.clickOnCreateButton();
        articleDialogPage.setSlugInput('slug');
        expect(articleDialogPage.getSlugInput()).toMatch('slug');
        articleDialogPage.setTitleInput('title');
        expect(articleDialogPage.getTitleInput()).toMatch('title');
        articleDialogPage.setDescriptionInput('description');
        expect(articleDialogPage.getDescriptionInput()).toMatch('description');
        articleDialogPage.setBodyInput('body');
        expect(articleDialogPage.getBodyInput()).toMatch('body');
        articleDialogPage.setCreatedAtInput(12310020012301);
        expect(articleDialogPage.getCreatedAtInput()).toMatch('2001-12-31T02:30');
        articleDialogPage.setUpdatedAtInput(12310020012301);
        expect(articleDialogPage.getUpdatedAtInput()).toMatch('2001-12-31T02:30');
        // articleDialogPage.tagSelectLastOption();
        articleDialogPage.authorSelectLastOption();
        articleDialogPage.save();
        expect(articleDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ArticleComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-article div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ArticleDialogPage {
    modalTitle = element(by.css('h4#myArticleLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    slugInput = element(by.css('input#field_slug'));
    titleInput = element(by.css('input#field_title'));
    descriptionInput = element(by.css('input#field_description'));
    bodyInput = element(by.css('textarea#field_body'));
    createdAtInput = element(by.css('input#field_createdAt'));
    updatedAtInput = element(by.css('input#field_updatedAt'));
    tagSelect = element(by.css('select#field_tag'));
    authorSelect = element(by.css('select#field_author'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setSlugInput = function(slug) {
        this.slugInput.sendKeys(slug);
    };

    getSlugInput = function() {
        return this.slugInput.getAttribute('value');
    };

    setTitleInput = function(title) {
        this.titleInput.sendKeys(title);
    };

    getTitleInput = function() {
        return this.titleInput.getAttribute('value');
    };

    setDescriptionInput = function(description) {
        this.descriptionInput.sendKeys(description);
    };

    getDescriptionInput = function() {
        return this.descriptionInput.getAttribute('value');
    };

    setBodyInput = function(body) {
        this.bodyInput.sendKeys(body);
    };

    getBodyInput = function() {
        return this.bodyInput.getAttribute('value');
    };

    setCreatedAtInput = function(createdAt) {
        this.createdAtInput.sendKeys(createdAt);
    };

    getCreatedAtInput = function() {
        return this.createdAtInput.getAttribute('value');
    };

    setUpdatedAtInput = function(updatedAt) {
        this.updatedAtInput.sendKeys(updatedAt);
    };

    getUpdatedAtInput = function() {
        return this.updatedAtInput.getAttribute('value');
    };

    tagSelectLastOption = function() {
        this.tagSelect.all(by.tagName('option')).last().click();
    };

    tagSelectOption = function(option) {
        this.tagSelect.sendKeys(option);
    };

    getTagSelect = function() {
        return this.tagSelect;
    };

    getTagSelectedOption = function() {
        return this.tagSelect.element(by.css('option:checked')).getText();
    };

    authorSelectLastOption = function() {
        this.authorSelect.all(by.tagName('option')).last().click();
    };

    authorSelectOption = function(option) {
        this.authorSelect.sendKeys(option);
    };

    getAuthorSelect = function() {
        return this.authorSelect;
    };

    getAuthorSelectedOption = function() {
        return this.authorSelect.element(by.css('option:checked')).getText();
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
