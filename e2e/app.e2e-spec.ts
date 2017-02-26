import { WebfeedPage } from './app.po';

describe('webfeed App', function() {
  let page: WebfeedPage;

  beforeEach(() => {
    page = new WebfeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
