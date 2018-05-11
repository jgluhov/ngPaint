import { AppPage } from './app.po';

describe('ngPaint App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain root tag', () => {
    page.navigateTo();
    expect(page.getRoot()).toBeDefined();
  });
});
