import { YummyTestPage } from './app.po';

describe('yummy-test App', () => {
  let page: YummyTestPage;

  beforeEach(() => {
    page = new YummyTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
