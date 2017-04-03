import { TheonerTestPage } from './app.po';

describe('theoner-test App', () => {
  let page: TheonerTestPage;

  beforeEach(() => {
    page = new TheonerTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
