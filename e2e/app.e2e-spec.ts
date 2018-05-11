import { AppPage } from './app.po';

describe('native-timer-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain root tag', () => {
    page.navigateTo();
    expect(page.getRoot()).toBeDefined();
  });
});
