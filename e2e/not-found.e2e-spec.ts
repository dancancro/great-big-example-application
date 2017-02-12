
import { browser, element, by } from 'protractor';

describe('Home', () => {

  beforeEach(async () => {
    return await browser.get('/fdsjafkldsafasff');
  });

  it('should have a button to go home', () => {
    expect(element(by.css('bc-not-found-page md-card button')).isPresent()).toEqual(true);
  });

  it('should have 404 message', () => {
    expect(element(by.css('bc-not-found-page md-card md-card-title')).getText())
      .toEqual('404: Not Found');
  });

});