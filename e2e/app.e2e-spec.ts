import { NgMeetupsPage } from './app.po';

describe('ng-meetups App', function() {
  let page: NgMeetupsPage;

  beforeEach(() => {
    page = new NgMeetupsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
