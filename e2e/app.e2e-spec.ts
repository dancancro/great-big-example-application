import { RealAngular2AppPage } from './app.po';

describe('ç App', function() {
  let page: RealAngular2AppPage;

  beforeEach(() => {
    page = new RealAngular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
