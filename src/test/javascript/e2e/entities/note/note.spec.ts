import { browser, ExpectedConditions as ec } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { NoteComponentsPage, NoteUpdatePage } from './note.page-object';

describe('Note e2e test', () => {
    let navBarPage: NavBarPage;
    let signInPage: SignInPage;
    let noteUpdatePage: NoteUpdatePage;
    let noteComponentsPage: NoteComponentsPage;

    beforeAll(async () => {
        await browser.get('/');
        navBarPage = new NavBarPage();
        signInPage = await navBarPage.getSignInPage();
        await signInPage.autoSignInUsing('admin', 'admin');
        await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
    });

    it('should load Notes', async () => {
        await navBarPage.goToEntity('note');
        noteComponentsPage = new NoteComponentsPage();
        expect(await noteComponentsPage.getTitle()).toMatch(/greatBigExampleApplicationApp.note.home.title/);
    });

    it('should load create Note page', async () => {
        await noteComponentsPage.clickOnCreateButton();
        noteUpdatePage = new NoteUpdatePage();
        expect(await noteUpdatePage.getPageTitle()).toMatch(/greatBigExampleApplicationApp.note.home.createOrEditLabel/);
        await noteUpdatePage.cancel();
    });

    it('should create and save Notes', async () => {
        await noteComponentsPage.clickOnCreateButton();
        await noteUpdatePage.setTextInput('text');
        expect(await noteUpdatePage.getTextInput()).toMatch('text');
        await noteUpdatePage.setColourInput('colour');
        expect(await noteUpdatePage.getColourInput()).toMatch('colour');
        await noteUpdatePage.setLeftInput('5');
        expect(await noteUpdatePage.getLeftInput()).toMatch('5');
        await noteUpdatePage.setTopInput('5');
        expect(await noteUpdatePage.getTopInput()).toMatch('5');
        await noteUpdatePage.save();
        expect(await noteUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(async () => {
        await navBarPage.autoSignOut();
    });
});
