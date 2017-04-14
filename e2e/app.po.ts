import { browser, element, by } from 'protractor';

export class AdalAngular4ExamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('aa4-root h1')).getText();
  }
}
