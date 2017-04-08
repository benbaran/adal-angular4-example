import { AdalAngular4ExamplePage } from './app.po';

describe('adal-angular4-example App', () => {
  let page: AdalAngular4ExamplePage;

  beforeEach(() => {
    page = new AdalAngular4ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
