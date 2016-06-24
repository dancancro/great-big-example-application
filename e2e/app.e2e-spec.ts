import { Ng2StateDemoPage } from './app.po';

describe('ng2-state-demo App', function() {
  let page: Ng2StateDemoPage;

  beforeEach(() => {
    page = new Ng2StateDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
