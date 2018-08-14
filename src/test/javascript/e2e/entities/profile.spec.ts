import { browser, element, by } from 'protractor';
import { NavBarPage } from './../page-objects/jhi-page-objects';

describe('Profile e2e test', () => {

    let navBarPage: NavBarPage;
    let profileDialogPage: ProfileDialogPage;
    let profileComponentsPage: ProfileComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Profiles', () => {
        navBarPage.goToEntity('profile');
        profileComponentsPage = new ProfileComponentsPage();
        expect(profileComponentsPage.getTitle())
            .toMatch(/greatBigExampleApplicationApp.profile.home.title/);

    });

    it('should load create Profile dialog', () => {
        profileComponentsPage.clickOnCreateButton();
        profileDialogPage = new ProfileDialogPage();
        expect(profileDialogPage.getModalTitle())
            .toMatch(/greatBigExampleApplicationApp.profile.home.createOrEditLabel/);
        profileDialogPage.close();
    });

    it('should create and save Profiles', () => {
        profileComponentsPage.clickOnCreateButton();
        profileDialogPage.setUsernameInput('username');
        expect(profileDialogPage.getUsernameInput()).toMatch('username');
        profileDialogPage.setBioInput('bio');
        expect(profileDialogPage.getBioInput()).toMatch('bio');
        profileDialogPage.setImageInput('image');
        expect(profileDialogPage.getImageInput()).toMatch('image');
        profileDialogPage.getFollowingInput().isSelected().then((selected) => {
            if (selected) {
                profileDialogPage.getFollowingInput().click();
                expect(profileDialogPage.getFollowingInput().isSelected()).toBeFalsy();
            } else {
                profileDialogPage.getFollowingInput().click();
                expect(profileDialogPage.getFollowingInput().isSelected()).toBeTruthy();
            }
        });
        profileDialogPage.save();
        expect(profileDialogPage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});

export class ProfileComponentsPage {
    createButton = element(by.css('.jh-create-entity'));
    title = element.all(by.css('jhi-profile div h2 span')).first();

    clickOnCreateButton() {
        return this.createButton.click();
    }

    getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class ProfileDialogPage {
    modalTitle = element(by.css('h4#myProfileLabel'));
    saveButton = element(by.css('.modal-footer .btn.btn-primary'));
    closeButton = element(by.css('button.close'));
    usernameInput = element(by.css('input#field_username'));
    bioInput = element(by.css('textarea#field_bio'));
    imageInput = element(by.css('input#field_image'));
    followingInput = element(by.css('input#field_following'));

    getModalTitle() {
        return this.modalTitle.getAttribute('jhiTranslate');
    }

    setUsernameInput = function(username) {
        this.usernameInput.sendKeys(username);
    };

    getUsernameInput = function() {
        return this.usernameInput.getAttribute('value');
    };

    setBioInput = function(bio) {
        this.bioInput.sendKeys(bio);
    };

    getBioInput = function() {
        return this.bioInput.getAttribute('value');
    };

    setImageInput = function(image) {
        this.imageInput.sendKeys(image);
    };

    getImageInput = function() {
        return this.imageInput.getAttribute('value');
    };

    getFollowingInput = function() {
        return this.followingInput;
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
