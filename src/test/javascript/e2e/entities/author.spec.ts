import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Author e2e test', () => {

    let navBarPage: NavBarPage;
    let authorDialogPage: AuthorDialogPage;
    let authorComponentsPage: AuthorComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Authors', () => {
        navBarPage.goToEntity('author');
        authorComponentsPage = new AuthorComponentsPage();
        expect(authorComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.author.home.title/);

    });

    it('should load create Author dialog', () => {
        authorComponentsPage.clickOnCreateButton();
        authorDialogPage = new AuthorDialogPage();
        expect(authorDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.author.home.createOrEditLabel/);
        authorDialogPage.close();
    });

    it('should create and save Authors', () => {
        authorComponentsPage.clickOnCreateButton();
        authorDialogPage.setBioInput('bio');
        expect(authorDialogPage.getBioInput()).toMatch('bio');
        authorDialogPage.userSelectLastOption();
        // authorDialogPage.followerSelectLastOption();
        // authorDialogPage.favoriteSelectLastOption();
        authorDialogPage.save();
        expect(authorDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class AuthorComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-author div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class AuthorDialogPage {
    modalTitle = element(by.css('h4#myAuthorLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    bioInput = element(by.css('textarea#field_bio'));
    userSelect = element(by.css('select#field_user'));
    followerSelect = element(by.css('select#field_follower'));
    favoriteSelect = element(by.css('select#field_favorite'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setBioInput = function(bio) {
        this.bioInput.sendKeys(bio);
    };

    getBioInput = function() {
        return this.bioInput.getAttribute('value');
    };

    userSelectLastOption = function() {
        this.userSelect.all(by.tagName('option')).last().click();
    };

    userSelectOption = function(option) {
        this.userSelect.sendKeys(option);
    };

    getUserSelect = function() {
        return this.userSelect;
    };

    getUserSelectedOption = function() {
        return this.userSelect.element(by.css('option:checked')).getText();
    };

    followerSelectLastOption = function() {
        this.followerSelect.all(by.tagName('option')).last().click();
    };

    followerSelectOption = function(option) {
        this.followerSelect.sendKeys(option);
    };

    getFollowerSelect = function() {
        return this.followerSelect;
    };

    getFollowerSelectedOption = function() {
        return this.followerSelect.element(by.css('option:checked')).getText();
    };

    favoriteSelectLastOption = function() {
        this.favoriteSelect.all(by.tagName('option')).last().click();
    };

    favoriteSelectOption = function(option) {
        this.favoriteSelect.sendKeys(option);
    };

    getFavoriteSelect = function() {
        return this.favoriteSelect;
    };

    getFavoriteSelectedOption = function() {
        return this.favoriteSelect.element(by.css('option:checked')).getText();
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
