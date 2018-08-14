import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Comment e2e test', () => {

    let navBarPage: NavBarPage;
    let commentDialogPage: CommentDialogPage;
    let commentComponentsPage: CommentComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Comments', () => {
        navBarPage.goToEntity('comment');
        commentComponentsPage = new CommentComponentsPage();
        expect(commentComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.comment.home.title/);

    });

    it('should load create Comment dialog', () => {
        commentComponentsPage.clickOnCreateButton();
        commentDialogPage = new CommentDialogPage();
        expect(commentDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.comment.home.createOrEditLabel/);
        commentDialogPage.close();
    });

    it('should create and save Comments', () => {
        commentComponentsPage.clickOnCreateButton();
        commentDialogPage.setBodyInput('body');
        expect(commentDialogPage.getBodyInput()).toMatch('body');
        commentDialogPage.setCreatedAtInput(12310020012301);
        expect(commentDialogPage.getCreatedAtInput()).toMatch('2001-12-31T02:30');
        commentDialogPage.setUpdatedAtInput(12310020012301);
        expect(commentDialogPage.getUpdatedAtInput()).toMatch('2001-12-31T02:30');
        commentDialogPage.articleSelectLastOption();
        commentDialogPage.authorSelectLastOption();
        commentDialogPage.save();
        expect(commentDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class CommentComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-comment div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class CommentDialogPage {
    modalTitle = element(by.css('h4#myCommentLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    bodyInput = element(by.css('textarea#field_body'));
    createdAtInput = element(by.css('input#field_createdAt'));
    updatedAtInput = element(by.css('input#field_updatedAt'));
    articleSelect = element(by.css('select#field_article'));
    authorSelect = element(by.css('select#field_author'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

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

    articleSelectLastOption = function() {
        this.articleSelect.all(by.tagName('option')).last().click();
    };

    articleSelectOption = function(option) {
        this.articleSelect.sendKeys(option);
    };

    getArticleSelect = function() {
        return this.articleSelect;
    };

    getArticleSelectedOption = function() {
        return this.articleSelect.element(by.css('option:checked')).getText();
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
