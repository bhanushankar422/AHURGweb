import { AHURGwebPage } from './app.po';

describe('ahurgweb App', () => {
  let page: AHURGwebPage;

  beforeEach(() => {
    page = new AHURGwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
