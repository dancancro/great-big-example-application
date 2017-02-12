import { GreatBigAngular2ExamplePage } from './app.po';
import { browser, element, by } from 'protractor';

describe('great-big-angular2-example App', function () {
  let page: GreatBigAngular2ExamplePage;

  beforeEach(async () => {
    return await browser.get('/');
  });

  beforeEach(() => {
    page = new GreatBigAngular2ExamplePage();
  });

  it('should display message saying Login', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Login');
  });
});
