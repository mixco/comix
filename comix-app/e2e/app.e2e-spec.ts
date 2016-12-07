import { ComixAppPage } from './app.po';

describe('comix-app App', function() {
  let page: ComixAppPage;

  beforeEach(() => {
    page = new ComixAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
