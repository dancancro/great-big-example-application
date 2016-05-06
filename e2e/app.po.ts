export class Myhack5Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('myhack5-app h1')).getText();
  }
}
