import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Hero e2e test', () => {

    let navBarPage: NavBarPage;
    let heroDialogPage: HeroDialogPage;
    let heroComponentsPage: HeroComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Heroes', () => {
        navBarPage.goToEntity('hero');
        heroComponentsPage = new HeroComponentsPage();
        expect(heroComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.hero.home.title/);

    });

    it('should load create Hero dialog', () => {
        heroComponentsPage.clickOnCreateButton();
        heroDialogPage = new HeroDialogPage();
        expect(heroDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.hero.home.createOrEditLabel/);
        heroDialogPage.close();
    });

    it('should create and save Heroes', () => {
        heroComponentsPage.clickOnCreateButton();
        heroDialogPage.setNameInput('name');
        expect(heroDialogPage.getNameInput()).toMatch('name');
        heroDialogPage.save();
        expect(heroDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class HeroComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-hero div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class HeroDialogPage {
    modalTitle = element(by.css('h4#myHeroLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    nameInput = element(by.css('input#field_name'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setNameInput = function(name) {
        this.nameInput.sendKeys(name);
    };

    getNameInput = function() {
        return this.nameInput.getAttribute('value');
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
