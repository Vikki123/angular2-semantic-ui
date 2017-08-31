import { JquerytrialPage } from './app.po';

describe('jquerytrial App', function() {
  let page: JquerytrialPage;

  beforeEach(() => {
    page = new JquerytrialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
