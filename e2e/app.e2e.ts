import { MyPage } from './app.po';

describe('my App', function() {
  let page: MyPage;

  beforeEach(() => {
    page = new MyPage();
  })

  it('should display message text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 State Management Demo');
  });
});
