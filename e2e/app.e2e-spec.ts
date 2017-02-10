import { GreatBigAngular2ExamplePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('great-big-angular2-example App', function () {
  let page: GreatBigAngular2ExamplePage;

  beforeEach(() => {
    page = new GreatBigAngular2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });
});
