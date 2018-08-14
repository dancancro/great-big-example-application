import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Note e2e test', () => {

    let navBarPage: NavBarPage;
    let noteDialogPage: NoteDialogPage;
    let noteComponentsPage: NoteComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Notes', () => {
        navBarPage.goToEntity('note');
        noteComponentsPage = new NoteComponentsPage();
        expect(noteComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.note.home.title/);

    });

    it('should load create Note dialog', () => {
        noteComponentsPage.clickOnCreateButton();
        noteDialogPage = new NoteDialogPage();
        expect(noteDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.note.home.createOrEditLabel/);
        noteDialogPage.close();
    });

    it('should create and save Notes', () => {
        noteComponentsPage.clickOnCreateButton();
        noteDialogPage.setTextInput('text');
        expect(noteDialogPage.getTextInput()).toMatch('text');
        noteDialogPage.setColourInput('colour');
        expect(noteDialogPage.getColourInput()).toMatch('colour');
        noteDialogPage.setLeftInput('5');
        expect(noteDialogPage.getLeftInput()).toMatch('5');
        noteDialogPage.setTopInput('5');
        expect(noteDialogPage.getTopInput()).toMatch('5');
        noteDialogPage.save();
        expect(noteDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class NoteComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-note div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class NoteDialogPage {
    modalTitle = element(by.css('h4#myNoteLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    textInput = element(by.css('input#field_text'));
    colourInput = element(by.css('input#field_colour'));
    leftInput = element(by.css('input#field_left'));
    topInput = element(by.css('input#field_top'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setTextInput = function(text) {
        this.textInput.sendKeys(text);
    };

    getTextInput = function() {
        return this.textInput.getAttribute('value');
    };

    setColourInput = function(colour) {
        this.colourInput.sendKeys(colour);
    };

    getColourInput = function() {
        return this.colourInput.getAttribute('value');
    };

    setLeftInput = function(left) {
        this.leftInput.sendKeys(left);
    };

    getLeftInput = function() {
        return this.leftInput.getAttribute('value');
    };

    setTopInput = function(top) {
        this.topInput.sendKeys(top);
    };

    getTopInput = function() {
        return this.topInput.getAttribute('value');
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
