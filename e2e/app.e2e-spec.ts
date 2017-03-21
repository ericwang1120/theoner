import { TheonerPage } from './app.po';

describe('theoner App', () => {
  let page: TheonerPage;

  beforeEach(() => {
    page = new TheonerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
