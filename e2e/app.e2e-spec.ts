import { Agene2Page } from './app.po';

describe('agene2 App', () => {
  let page: Agene2Page;

  beforeEach(() => {
    page = new Agene2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
