import { MyPage } from './app.po';

describe('ng2-state-demo App', function() {
  let page: MyPage;

  beforeEach(() => {
    page = new MyPage();
  });

  it('should display message saying Angular2 State Management Demo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 State Management Demo');
  });
});
