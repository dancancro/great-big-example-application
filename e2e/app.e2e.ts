import { Myhack5Page } from './app.po';

describe('myhack5 App', function() {
  let page: Myhack5Page;

  beforeEach(() => {
    page = new Myhack5Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('myhack5 works!');
  });
});
