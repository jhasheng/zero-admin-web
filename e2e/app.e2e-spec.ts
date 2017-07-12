import { ZeroAdminWebPage } from './app.po';

describe('zero-admin-web App', () => {
  let page: ZeroAdminWebPage;

  beforeEach(() => {
    page = new ZeroAdminWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
